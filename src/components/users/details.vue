<template>
  <div>
    {{user}}
    {{userWallet}}
  </div>
</template>

<script>
import { date } from 'quasar'
export default {
  // name: 'ComponentName',
  data () {
    return {
      user: '',
      userWallet: ''
    }
  },

  mounted() {
    this.getUser(this.$route.params.phone);
    this.getUserWallet(this.$route.params.phone);
  },

  methods: {
    async getUser(phone){
      this.loading = phone;
      try {
        const response = await this.$axios.post(process.env.Api + '/admin/findUser', { phone: phone });
        const data = await response.data;
        this.user = data
      } catch (error) {

      }
    },

    async getUserWallet(phone){
      this.loading = phone;
      try {
        const response = await this.$axios.post(process.env.Api + '/admin/walletBalance', { phone: phone });
        const data = await response.data;
        this.userWallet = data
      } catch (error) {

      }
    },

  },
}
</script>
