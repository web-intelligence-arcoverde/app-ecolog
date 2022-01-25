import {combineReducers} from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import points from './pointsCollenction/reducer';
import point from './point/reducer';

export default combineReducers({
  auth,
  user,
  point,
  points,
});
