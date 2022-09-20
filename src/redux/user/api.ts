import { AxiosResponse } from 'axios';

import API from '../../common/constants/api';
import AxiosClient from '../../common/services/axiosClient';

import { UserInfo } from './types';

const authApis = {
  login: (): Promise<AxiosResponse<UserInfo>> => {
    const results = AxiosClient.get(API.USER.GET_USER_INFO);
    return results;
  },
};

export default authApis;
