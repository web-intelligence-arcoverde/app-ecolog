import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import enterprise from './user/sagas';
import points from './pointsCollenction/sagas';

export default function* rootSaga() {
  return yield all([auth, user, enterprise, points]);
}
