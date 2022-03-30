import axios from 'axios';
import { getToken } from '../utils/auth.js';

console.log(process.env.VUE_APP_BASE_URL)
let http = axios.create({
  baseURL: process.env.VUE_APP_AXIOS_URL,
  timeout: (1000 * 5)
});

http.interceptors.request.use(config => {
  if (getToken()) {
    config.headers.token = getToken();
  }
  return config;
}, error => {
  return Promise.reject(error);
});

http.interceptors.response.use(error => {
  return error;
}, error => {
  return Promise.reject(error);
});

export default http
