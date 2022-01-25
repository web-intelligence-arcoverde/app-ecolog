import types from './types';

export function openCardPoint(point) {
  return {type: types.OPEN_POINT_CARD, point};
}

export function closeCardPoint() {
  return {type: types.CLOSE_POINT_CARD};
}
