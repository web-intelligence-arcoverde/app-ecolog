import {takeLatest, all, put, call} from 'redux-saga/effects';

import types from './types';

const prefixUser = '/api/v1/users';

import api from '../../../services/api';

import store from '../../index';

export function* signInRequest({user}) {
  try {
    const {navigation} = user;

    const {data} = yield call(api.post, `${prefixUser}/signin`, {
      email: user.data.email,
      password: user.data.password,
    });
    console.log(data);
    navigation.navigate('Dashboard');
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
