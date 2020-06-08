import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default boot(({ Vue }) => {
  Vue.prototype.$axios = axios;
  axios.defaults.headers.common["Authorization"] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOiJWaWMxMDU2NzU0ISIsImlhdCI6MTU5MTM2MTI5MCwiZXhwIjoxNTkxMzY0ODkwfQ.vo2X6tCbVVdDnIVYCg_DV_wjcGQBBpHzeYuJpPH7yOU';
});
