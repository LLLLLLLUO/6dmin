import Vue from 'vue';
import Vuex from 'vuex';
import { userLogin, userInfo, logout } from '../api/index.js';
import { setToken, getToken, getUserInfo, setUserInfo } from '../utils/auth.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getToken() || '',
    userInfo: getUserInfo() || '',
    home: '/home/welcome'
  },
  mutations: {
    setToken: function (state, token) {
      setToken(token);
    },
    setUserInfo: function (state, userInfo) {
      console.log(userInfo)
      state.userInfo = userInfo;
    },
    selectMenu: function (state, path) {
      state.home = path;
    }
  },
  actions: {
    userLogin: function ({ commit }, data) {
      return new Promise(async (resolve, reject) => {
        try {
          let result = await userLogin(data);
          let { token } = result.data.data;
          commit('setToken', token);
          resolve(result)
        } catch (error) {
          reject(error)
        }
      });
      // commit('userLogin', data)
    },
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
    setUserInfo: function ({ commit }, user) {
      setUserInfo(user);
      commit('setUserInfo', user)
    },
    selectMenu: function ({ commit }, path) {
      commit('selectMenu', path)
    },
    logout: function ({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          let { data } = await logout();
          console.log(data)
        } catch (error) {
          console.log(error)
          reject(error)
        }
      })
    }
  },
  modules: {
  },
});



//promise下的resolve 和reject
