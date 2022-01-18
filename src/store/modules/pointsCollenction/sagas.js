import {takeLatest, all, put} from 'redux-saga/effects';

import types from './types';
import {readPointsCollectionSuccess} from './actions';

const data = [
  {
    name: 'EREMA',
    latitude: -8.41719,
    longitude: -37.03838,
    description: '',
    type: 'enterprise',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },
  {
    name: 'Lions',
    latitude: -8.416129,
    longitude: -37.03647,
    type: 'enterprise',
    description: '',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },
  {
    name: 'Esporte',
    latitude: -8.418841,
    longitude: -37.044705,
    description: '',
    type: 'car',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },
  {
    name: 'Centro',
    latitude: 8.419551,
    longitude: -37.055889,
    type: 'enterprise',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },
  {
    name: 'Centro',
    description: '',
    latitude: -8.408931,
    longitude: -37.059768,
    type: 'person',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },
  {
    name: 'Centro',
    description: '',
    latitude: -8.41263,
    longitude: -37.067686,
    type: 'enterprise',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },
  {
    name: 'Centro',
    description: '',
    latitude: -8.414891,
    longitude: -37.074263,
    type: 'car',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },
  {
    name: 'Centro',
    description: '',
    latitude: -8.409888,
    longitude: -37.081048,
    type: 'person',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },

  {
    name: 'Centro',
    description: '',
    latitude: -8.417007,
    longitude: -37.033872,
    type: 'person',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },

  {
    name: 'Centro',
    description: '',
    latitude: -8.416232,
    longitude: -37.034736,
    type: 'person',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },

  {
    name: 'Centro',
    description: '',
    latitude: -8.417357,
    longitude: -37.036077,
    type: 'car',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },

  {
    name: 'Centro',
    description: '',
    latitude: -8.418981,
    longitude: -37.04171,
    type: 'point',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
  },

  {
    name: 'Centro',
    description: '',
    latitude: -8.417357,
    longitude: -37.041892,
    type: 'person',
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
