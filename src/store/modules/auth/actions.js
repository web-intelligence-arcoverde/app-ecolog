import types from './types';

export function readSignInRequest(user) {
  return {type: types.SIGN_IN_REQUEST, user};
}
