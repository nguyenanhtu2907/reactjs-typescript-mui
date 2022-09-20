import { takeEvery } from 'redux-saga/effects';
import { Action } from 'redux-actions';

import { UserInfo } from './types';
import { ACTIONS } from './actions';

function* setUserProfile(action: Action<UserInfo>) {
  try {
    console.log(action);
  } catch (error) {}
}

function* watchAll() {
  yield takeEvery(ACTIONS.SET_PROFILE, setUserProfile);
}

export default watchAll();
