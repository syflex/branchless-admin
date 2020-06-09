import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';
import { LocalStorage } from 'quasar';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default boot(({ Vue }) => {
  Vue.prototype.$axios = axios;
  const token = LocalStorage.getItem('branchless-data-auth-token');
  axios.defaults.headers.common['Authorization'] = + token;

  Vue.prototype.$axiosadmin = axios;
});
