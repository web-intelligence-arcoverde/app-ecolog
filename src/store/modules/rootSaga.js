import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import enterprise from './user/sagas';
import companies from './companies/sagas';

export default function* rootSaga() {
  return yield all([auth, user, enterprise, companies]);
}
