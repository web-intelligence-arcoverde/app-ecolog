import types from './types';

export function addItemCart(item) {
  return {type: types.ADD_CART, item};
}
