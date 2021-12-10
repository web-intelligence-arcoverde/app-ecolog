import {takeLatest, all, put, call} from 'redux-saga/effects';

import types from './types';
import {createUserSuccess} from './actions';

export function* createUser({user}) {
  try {
    const {data} = yield call(api.post, `api/v1/users/`, user);
    put(createUserSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest(types.CREATE_USER_REQUEST, createUser)]);
