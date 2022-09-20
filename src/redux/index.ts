import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Import all reducers here
import userReducer, { UserState } from './user/reducer';
// Import all sagas here
import userSagas from './user/sagas';

export interface GlobalState {
  user: UserState;
}

export const combinedReducer = combineReducers({
  user: userReducer,
});

export const rootSaga = function* (): any {
  yield all([userSagas]);
};
