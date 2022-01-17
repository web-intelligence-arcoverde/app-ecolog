import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

function points(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.READ_POINTS_COLLECTION_REQUEST: {
      return produce(state, draft => {
        draft.loading = true;
      });
    }

    case types.READ_POINTS_COLLECTION_SUCCESS: {
      return produce(state, draft => {
        draft.loading = false;
        draft.data = action.points;
      });
    }

    default:
      return state;
  }
}

export default points;
