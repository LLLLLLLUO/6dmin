import axios from 'axios';

console.log(process.env.VUE_APP_BASE_URL)
let http = axios.create({
  baseURL: process.env.VUE_APP_AXIOS_URL,
  timeout: (1000 * 5)
});

http.interceptors.request.use(config => {
  config.headers.token = sessionStorage.token;
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
