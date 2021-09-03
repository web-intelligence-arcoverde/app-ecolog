import types from './types';

import produce from 'immer';

const INITIAL_STATE = {
  cart: [],
  total: 0,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_CART: {
      return produce(state, (draft) => {
        draft.cart = [...state.cart, action.item];
      });
    }

    default:
      return state;
  }
}

export default user;
