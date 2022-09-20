import axios from 'axios';

const baseURL = process.env.REACT_APP_API_ENDPOINT;

const AxiosClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosClient.interceptors.request.use(
  async (config) => {
    try {
    } catch (e) {
      console.log('Token Invalid', e);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

AxiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw Error(error);
  },
);

export default AxiosClient;
