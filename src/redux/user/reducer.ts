import { Reducer } from 'redux';
import { Action } from 'redux-actions';

import { produceReducer } from '../../common/utils/immer';

import { ACTIONS } from './actions';
import { UserInfo } from './types';

export interface UserState {
  userInfo: UserInfo;
}

const initialState: UserState = {
  userInfo: { email: 'account@mailer.com' },
};

const actionHandlers = {
  [ACTIONS.SET_PROFILE]: (draftStore: UserState, action: Action<UserInfo>) => {
    draftStore.userInfo = action.payload;
  },
};

export default produceReducer(actionHandlers, initialState) as Reducer<UserState>;
