import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  user: {},
  isLoading: false,
  token: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SIGN_IN_REQUEST: {
      return produce(state, draft => {
        draft.isLoading = true;
      });
    }
    case types.SIGN_IN_SUCCESS: {
      return produce(state, draft => {
        draft.user = action.user;
        draft.isLoading = false;
      });
    }

    default:
      return state;
  }
}

export default user;
