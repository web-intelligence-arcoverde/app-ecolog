import types from './types';

export function readPointsCollectionRequest() {
  return {type: types.READ_POINTS_COLLECTION_REQUEST};
}

export function readPointsCollectionSuccess(points) {
  return {type: types.READ_POINTS_COLLECTION_SUCCESS, points};
}
