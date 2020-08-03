<template>
  <div>
    {{user}}
    {{userWallet}}
    {{userSavings}}
    {{userWalletTrans}}
    {{userBankTrans}}
  </div>
</template>

<script>
import { date } from 'quasar'
export default {
  // name: 'ComponentName',
  data () {
    return {
      user: '',
      userWallet: '',
      userSavings: [],
      userWalletTrans: [],
      userBankTrans: []
    }
  },

  mounted() {
    this.getUser(this.$route.params.phone);
    this.getUserWallet(this.$route.params.phone);
    this.getUserSavings(this.$route.params.phone);
    this.getUserWalletTrans(this.$route.params.phone);
    this.getUserBankTrans(this.$route.params.phone);
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
        const response = await this.$axios.get(process.env.Api + '/admin/walletBalance?phone='+ phone);
        const data = response.data;
        this.userWallet = data
      } catch (error) {

      }
    },

    async getUserSavings(phone){
      this.loading = phone;
      try {
        const response = await this.$axios.get(process.env.Api + '/admin/userSavings?phone='+ phone);
        const data = await response.data;
        this.userSavings = data
      } catch (error) {

      }
    },

    async getUserWalletTrans(phone){
      this.loading = phone;
      try {
        const response = await this.$axios.get(process.env.Api + '/admin/userWalletTrans?phone='+ phone);
        const data = response.data;
        this.userWalletTrans = data
      } catch (error) {

      }
    },

    async getUserBankTrans(phone){
      this.loading = phone;
      try {
        const response = await this.$axios.get(process.env.Api + '/admin/userBankTrans?phone='+ phone);
        const data = response.data;
        this.userBankTrans = data
      } catch (error) {

      }
    },

  },
}
</script>
