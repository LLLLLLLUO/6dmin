/*
  *
  * 存储token到本地
*/
function setToken(data) {
  sessionStorage.setItem('token', data)
};

/*
  *
  * 读取本地token值
*/
function getToken() {
  return sessionStorage.getItem('token')
};

/*
  *
  * 存储用户信息
*/
function setUserInfo(user) {
  localStorage.setItem('user', JSON.stringify(user))
};

/*
  *
  *读取用户信息
*/
function getUserInfo() {
  return JSON.parse(localStorage.getItem('user'))
};

export {
  setToken, getToken, setUserInfo, getUserInfo
}
