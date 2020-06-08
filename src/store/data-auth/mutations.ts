import { MutationTree } from 'vuex';
import { DataAuthStateInterface } from './state';
import { LocalStorage } from 'quasar';

const mutation: MutationTree<DataAuthStateInterface> = {
  login ( state: DataAuthStateInterface, data ) {
    LocalStorage.set('branchless-data-auth-token', data.data.token);
  },

  logout () {
    LocalStorage.remove('branchless-data-auth-token');
  },

  users ( state: DataAuthStateInterface, data ){
    state.users = data.data.data;
  },

  bankTrans ( state: DataAuthStateInterface, data ){
    state.bankTrans = data.data.data;
  },

  walletTrans ( state: DataAuthStateInterface, data ){
    state.walletTrans = data.data.data;
  }

};

export default mutation;
