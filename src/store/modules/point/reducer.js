import types from './types';

import produce from 'immer';

const INITIAL_STATE = {
  point: {},
  visiblePointCard: false,
};

function point(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.OPEN_POINT_CARD: {
      return produce(state, draft => {
        draft.point = action.point;
        draft.visiblePointCard = true;
      });
    }

    case types.CLOSE_POINT_CARD: {
      return produce(state, draft => {
        draft.point = {};
        draft.visiblePointCard = false;
      });
    }

    default:
      return state;
  }
}

export default point;
