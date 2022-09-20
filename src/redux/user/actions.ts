import { createAction } from 'redux-actions';

import { UserInfo } from './types';

export const ACTIONS = {
  SET_PROFILE: 'SET_PROFILE',
};

export const setUserInfo = createAction<UserInfo>(ACTIONS.SET_PROFILE);
