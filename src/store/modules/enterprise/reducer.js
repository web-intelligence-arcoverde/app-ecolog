import types from './types';

import produce from 'immer';

const INITIAL_STATE = {
  enterprise: {},
  visibleInformationCard: false,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.READ_ENTERPRISE: {
      return produce(state, draft => {
        draft.enterprise = action.item;
        draft.visibleInformationCard = true;
      });
    }

    case types.CLOSE_INFORMATION_CARD_ENTERPRISE: {
      return produce(state, draft => {
        draft.enterprise = {};
        draft.visibleInformationCard = false;
      });
    }

    default:
      return state;
  }
}

export default user;
