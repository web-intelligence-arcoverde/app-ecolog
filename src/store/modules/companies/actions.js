import types from './types';

export function readCompaniesRequest() {
  return {type: types.READ_COMPANIES_REQUEST};
}

export function readCompaniesSuccess(companies) {
  return {type: types.READ_COMPANIES_SUCCESS, companies};
}
