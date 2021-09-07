import {takeLatest, all, put, call} from 'redux-saga/effects';

import types from './types';
import {readUserSuccess} from './actions';

export function* getCommics() {
  try {
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest(types.READ_USER_REQUEST, getCommics)]);
