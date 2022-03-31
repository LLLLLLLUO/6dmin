import http from '../utils';
/**
 *
 * 用户登录
 */
function userLogin(data) {
  return http({
    url: '/user/login',
    method: 'post',
    data
  })
};

/**
 *
 * 获取用户信息
 */
function userInfo() {
  return http({
    url: '/user/info',
    method: 'get'
  })
}

/**
 *
 * 退出登录
 */
function logout() {
  return http({
    url: '/user/logout',
    method: 'post'
  })
}

export {
  userLogin,
  userInfo,
  logout
}
