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
};

/**
 *
 * 校验原密码
 */
function resPass({ userId, password }) {
  return http({
    url: '/user/pwd',
    method: 'post',
    data: {
      userId,
      password
    }
  })
};
/**
 *
 * 修改密码
 */
function putPass(form) {
  console.log(form);
  // let data = {
  //   userId: form.userId,
  //   password: form.newPass
  // };
  // console.log(data);
  return http({
    url: '/user/pwd',
    method: 'PUT',
    data: {
      userId: form.userId,
      password: form.newPass
    }
  })
}


export {
  userLogin,
  userInfo,
  logout,
  resPass,
  putPass
}
