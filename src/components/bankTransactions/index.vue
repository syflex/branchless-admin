<template>
  <div>
    <q-table square
      title="Bank Transactions"
      :data="bankTrans"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
import { date } from 'quasar'
export default {
  // name: 'ComponentName',
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Full Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'phone', align: 'center', label: 'Phone', field: 'phone', sortable: true },
        { name: 'account', label: 'Account', field: 'account', sortable: true },
        { name: 'status', label: 'Status', field: 'status', sortable: true },
        { name: 'type', label: 'Type', field: 'type' },
        { name: 'amount', label: 'Amount', field: 'amount', sortable: true },
        { name: 'charge', label: 'Charge', field: 'charge', sortable: true },
        { name: 'createdAt', label: 'Transaction Date', field: 'createdAt', sortable: true, format: val => `${date.formatDate(val, 'YYYY-MM-DD')}` },
      ]
    }
  },

  computed: {
     bankTrans() {
      return this.$store.getters['DataAuth/bankTrans'];
    },
  },
}
</script>