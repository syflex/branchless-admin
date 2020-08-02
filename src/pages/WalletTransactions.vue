<template>
  <q-page padding>
    <!-- content -->
    <WalletTransaction />
  </q-page>
</template>

<script>
import WalletTransaction from 'components/walletTransactions/index'
export default {
  // name: 'PageName',
  components:{
    WalletTransaction
  },

  async mounted() {
    await this.getWalletTransactions()
  },

  methods: {
    getWalletTransactions(){
      this.$store.dispatch('DataAuth/getWalletTrans');
    }
  },
}
</script>
