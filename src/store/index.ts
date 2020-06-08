import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import DataAuth from './data-auth';
import { DataAuthStateInterface } from './data-auth/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StoreInterface {
  // Define your own store structure, using submodules if needed
  DataAuth: DataAuthStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: unknown;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StoreInterface>({
    modules: {
      DataAuth
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  });

  return Store;
});
