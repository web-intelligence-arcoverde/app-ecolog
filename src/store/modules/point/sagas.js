import {takeLatest, all, put, call} from 'redux-saga/effects';

import types from './types';
import {} from './actions';

export function* getInformationPoint() {
  try {
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest(types.OPEN_POINT_CARD, getInformationPoint)]);
