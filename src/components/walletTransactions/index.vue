<template>
  <div>
    <q-table square
      title="Wallet Transaction"
      :data="walletTrans"
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
        { name: 'amount', label: 'Amount', field: 'amount', sortable: true },
        { name: 'reciever', label: 'Reciever', field: 'reciever', sortable: true },
        { name: 'recv_name', label: 'Reciever Name', field: 'recv_name' },
        { name: 'status', label: 'Status', field: 'status', sortable: true },
        { name: 'createdAt', label: 'Transaction Date', field: 'createdAt', sortable: true, format: val => `${date.formatDate(val, 'YYYY-MM-DD')}` },
      ]
    }
  },

  computed: {
    walletTrans() {
      return this.$store.getters['DataAuth/walletTrans'];
    }
  },
}
</script>
