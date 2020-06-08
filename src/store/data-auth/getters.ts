import { GetterTree } from 'vuex';
import { StoreInterface } from '../index';
import { DataAuthStateInterface } from './state';
import { LocalStorage } from 'quasar';

const getters: GetterTree<DataAuthStateInterface, StoreInterface> = {
  users ( state ) {
    return state.users
  },

  isLoggedIn ( state ) {
    return state.token || LocalStorage.getItem('branchless-data-auth-token') || '';
  },

  bankTrans ( state ) {
    return state.bankTrans
  },

  walletTrans ( state ) {
    return state.walletTrans
  },

};

export default getters;
