import {takeLatest, all, put} from 'redux-saga/effects';

import types from './types';
import {readPointsCollectionSuccess} from './actions';

const data = [
  {
    enterprise: 'Casa',
    latitude: -8.41789,
    longitude: -37.034227,
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },
  {
    enterprise: 'EREMA',
    latitude: -8.41719,
    longitude: -37.03838,
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },
  {
    enterprise: 'Lions',
    latitude: 8.416129,
    longitude: -37.03647,
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },
  {
    enterprise: 'Esporte',
    latitude: -8.418841,
    longitude: -37.044705,
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },
  {
    enterprise: 'Centro',
    latitude: 8.419551,
    longitude: -37.055889,
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },
];

export function* getPointsCollection() {
  try {
    yield put(readPointsCollectionSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(types.READ_POINTS_COLLECTION_REQUEST, getPointsCollection),
]);
