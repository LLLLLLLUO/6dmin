import Vue from 'vue';
import Vuex from 'vuex';
import { userLogin, userInfo, logout, resPass, putPass } from '../api/index.js';
import { setToken, getToken, getUserInfo, setUserInfo, clearToken, clearUserInfo } from '../utils/auth.js';
import { Message } from 'element-ui';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getToken() || '',
    userInfo: getUserInfo() || '',
  },
  mutations: {
    setToken: function (state, token) {
      setToken(token);
    },
    setUserInfo: function (state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    /**
     * 用户登录
     * @param {*} param0
     * @param {*} data
     * @returns
     */
    userLogin: function ({ commit }, data) {
      return new Promise(async (resolve, reject) => {
        try {
          let result = await userLogin(data);
          let { token } = result.data.data;
          commit('setToken', token);
          resolve(result)
        } catch (error) {
          console.log(error);
          reject(error)
        }
      })
    },
    /**
     * 获取用户信息
     * @param {*} param0
     * @returns
     */
    userInfo: function ({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          let temp = await userInfo();
          resolve(temp)
        } catch (error) {
          reject(error)
        }
      })
    },
    /**
     * 存储用户信息
     * @param {*} param0
     * @param {*} user
     */
    setUserInfo: function ({ commit }, user) {
      setUserInfo(user);
      commit('setUserInfo', user)
    },
    /**
     * 退出登录
     * @param {*} param0
     * @returns
     */
    logout: function ({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          let { data } = await logout();
          if (data.flag) {
            clearToken();
            clearUserInfo();
          }
          resolve(data)
        } catch (error) {
          console.log(error)
          reject(error)
        }
      })
    },
    /**
     * 确认密码
     * @param {*} param0
     * @param {*} form
     * @returns
     */
    resPass: function ({ commit }, form) {
      console.log(form);
      return new Promise(async (resolve, reject) => {
        let { data } = await resPass(form)
        if (data.flag) {
          resolve(data);
        }
      })
    },
    /**
     * 修改密码
     * @param {*} param0
     * @param {*} form
     */
    upPass: function ({ commit }, form) {
      console.log(form);
      return new Promise(async (resolve, reject) => {
        try {
          let { data } = await putPass(form);
          resolve(data);
        } catch (error) {
          console.log(error);
          reject(error);
        }
      })
    }
  },
  modules: {
  },
});



//promise下的resolve 和reject
