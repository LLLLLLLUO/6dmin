import http from '../utils';

function userLogin(data) {
  return http({
    url: '/user/login',
    method: 'post',
    data
  })
};

function userInfo() {
  return http({
    url: '/user/info',
    method: 'get'
  })
}

export {
  userLogin,
  userInfo
}
