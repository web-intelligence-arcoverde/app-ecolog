import {takeLatest, all, put, call} from 'redux-saga/effects';

import types from './types';
import {readCompaniesSuccess} from './actions';

const data = [
  {
    enterprise: 'Casa',
    latitude: -8.41789,
    longitude: -37.034227,
  },
  {
    enterprise: 'EREMA',
    latitude: -8.41719,
    longitude: -37.03838,
  },
  {
    enterprise: 'Lions',
    latitude: 8.416129,
    longitude: -37.03647,
  },
  {
    enterprise: 'Esporte',
    latitude: -8.418841,
    longitude: -37.044705,
  },
  {
    enterprise: 'Centro',
    latitude: 8.419551,
    longitude: -37.055889,
  },
];

export function* getCompanies() {
  try {
    console.log('Aqui');
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest(types.READ_COMPANIES_REQUEST, getCompanies)]);
