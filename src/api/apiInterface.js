import api from './api';
import getHeaders from './headers';

const BASE_URL = 'https://passion-backend.herokuapp.com/api/v1';

const getCompleteURL = url => `${BASE_URL}${url}`;

const apiCall = (url, method, body) => api(
  getCompleteURL(url),
  method,
  getHeaders(),
  body,
);

export default apiCall;
