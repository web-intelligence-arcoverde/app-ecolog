import types from './types';

export function readEnterprise(item) {
  return {type: types.READ_ENTERPRISE, item};
}

export function closeInformationCardEnterprise() {
  return {type: types.CLOSE_INFORMATION_CARD_ENTERPRISE};
}
