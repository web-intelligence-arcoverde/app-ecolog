import {takeLatest, all, put, call} from 'redux-saga/effects';

import types from './types';
import {readPointsCollectionSuccess} from './actions';

import axios from 'axios';

export function* getPointsCollection() {
  try {
    const {data} = yield call(
      axios.get,
      'https://61f027f6732d93001778e8d7.mockapi.io/api/v1/points',
    );

    yield put(readPointsCollectionSuccess(data[0].points));
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(types.READ_POINTS_COLLECTION_REQUEST, getPointsCollection),
]);
