import { ActionTree } from 'vuex';
import { StoreInterface } from '../index';
import { DataAuthStateInterface } from './state';
import axios from 'axios';

const actions: ActionTree<DataAuthStateInterface, StoreInterface> = {

  async login ({ commit }) {
    return await new Promise((resolve, reject) => {
      axios.post(process.env.Api + '/admin/login', { phone: '8031888217', pin: '123456'})
      .then(response => {
        const data = response.data
        axios.defaults.headers.common['Authorization'] = data.token;
        commit('login', { data: data });
        resolve(response);
        })
        .catch(err => {
          commit('logout');
          reject(err);
        });
    });
  },


  async getUsers ({ commit }) {
    return await new Promise((resolve, reject) => {
      axios.get(process.env.Api + '/admin/getAllUsers')
      .then(response => {
        commit('users', { data: response.data });
        resolve(response);
        })
        .catch(err => {
          commit('logout');
          reject(err);
        });
    });
  },

  async getUsername ({ commit }) {
    return await new Promise((resolve, reject) => {
      axios.post(process.env.Api + '/admin/userName')
      .then(response => {
        commit('users', { data: response.data });
        resolve(response);
        })
        .catch(err => {
          commit('logout');
          reject(err);
        });
    });
  },

  async getBankTrans ({ commit }) {
    return await new Promise((resolve, reject) => {
      axios.get(process.env.Api + '/admin/getBankTrans')
      .then(response => {
        commit('bankTrans', { data: response.data });
        resolve(response);
        })
        .catch(err => {
          commit('logout');
          reject(err);
        });
    });
  },

  async getWalletTrans ({ commit }) {
    return await new Promise((resolve, reject) => {
      axios.get(process.env.Api + '/admin/getWalletTrans')
      .then(response => {
        commit('walletTrans', { data: response.data });
        resolve(response);
        })
        .catch(err => {
          commit('logout');
          reject(err);
        });
    });
  }


};

export default actions;
