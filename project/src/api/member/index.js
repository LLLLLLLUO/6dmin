import http from '../../utils/index.js';

/**
 * 查询用户
 * @param {*} param0
 * @returns
 */
function getUserList({ pagenum, pagesize }) {
  return http({
    url: `/member/list/search/${pagenum}/${pagesize}`,
    method: 'post'
  })
};

/**
 * 删除用户
 * @returns
 */
function deleteUser(id) {
  return http({
    url: '/member/' + id,
    method: 'delete',
  })
};



export {
  getUserList,
  deleteUser
}
