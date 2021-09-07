import types from './types';

import produce from 'immer';

const INITIAL_STATE = {
  user: {},
  location: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  },
  distance: {},
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.READ_ENTERPRISE: {
      return produce(state, draft => {
        draft.enterprise = action.item;
      });
    }

    case types.SET_USER_LOCATION: {
      return produce(state, draft => {
        draft.location = action.location;
      });
    }

    case types.GET_DISTANCE_FOR_ENTERPRISE: {
      return produce(state, draft => {
        draft.distance = action.distance;
      });
    }

    default:
      return state;
  }
}

export default user;
