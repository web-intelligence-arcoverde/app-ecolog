import types from './types';

export function readUserRequest() {
  return {type: types.READ_USER_REQUEST};
}

export function readUserSuccess(user) {
  return {type: types.READ_USER_SUCCESS, user};
}

export function setUserLocation(location) {
  return {type: types.SET_USER_LOCATION, location};
}

export function setDistanceForEnterprise(distance) {
  return {type: types.GET_DISTANCE_FOR_ENTERPRISE, distance};
}
