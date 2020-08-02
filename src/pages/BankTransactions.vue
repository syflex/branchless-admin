<template>
  <q-page padding>
    <!-- content -->
    <BankTransactions />
  </q-page>
</template>

<script>
import BankTransactions from 'components/bankTransactions/index'
export default {
  // name: 'PageName',
  components:{
    BankTransactions
  },
  async mounted() {
    await this.getBankTransactions()
  },

  methods: {
    getBankTransactions(){
      this.$store.dispatch('DataAuth/getBankTrans');
    }
  },
}
</script>
