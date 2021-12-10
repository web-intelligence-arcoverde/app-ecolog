import {takeLatest, all, put, call} from 'redux-saga/effects';

import types from './types';

const prefixUser = '/api/v1/users/';

import api from '../../../services/api';

export function* signInRequest({user}) {
  try {
    const {email, password} = user;
    const {data} = yield call(api.post, `${prefixUser}signin`, {
      email,
      password,
    });
    console.log(data.user, data.token);
  } catch (error) {
    console.log(error);
  }
}

export function* signOutRequest({user}) {
  try {
    const response = yield call(api.post, `${prefixUser}register`, {});
  } catch (error) {}
}

export default all([takeLatest(types.SIGN_IN_REQUEST, signInRequest)]);
