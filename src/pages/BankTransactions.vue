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
  }
}
</script>
