const TOKEN_KEY = 'token';
const USER_INFO_KEY = 'user';
/*
  *
  * 存储token到本地
*/
function setToken(data) {
  sessionStorage.setItem(TOKEN_KEY, data)
};

/*
  *
  * 读取本地token值
*/
function getToken() {
  return sessionStorage.getItem(TOKEN_KEY)
};

/**
 *
 * @param {*} user
 * 清除token
 */
function clearToken() {
  sessionStorage.removeItem(TOKEN_KEY);
}

/*
  *
  * 存储用户信息
*/
function setUserInfo(user) {
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(user))
};

/*
  *
  *读取用户信息
*/
function getUserInfo() {
  return JSON.parse(localStorage.getItem(USER_INFO_KEY))
};
/**
 *
 * 清除用户信息
 */
function clearUserInfo() {
  localStorage.removeItem(USER_INFO_KEY)
}

export {
  setToken, getToken, setUserInfo, getUserInfo, clearToken, clearUserInfo
}
