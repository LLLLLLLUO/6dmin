import http from '../utils';

function userLogin(form) {
  return http.post('/user/login', form)
};

export {
  userLogin
}
