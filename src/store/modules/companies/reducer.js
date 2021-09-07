import types from './types';

import produce from 'immer';

const INITIAL_STATE = {
  companies: [],
  loading: false,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.READ_COMPANIES_REQUEST: {
      return produce(state, draft => {
        draft.loading = true;
      });
    }

    case types.READ_COMPANIES_SUCCESS: {
      return produce(state, draft => {
        draft.loading = false;
        draft.companies = [...state.companies, action.companies];
      });
    }

    default:
      return state;
  }
}

export default user;
