<template>
  <div>
    <q-table square
      title="Wallet Transaction"
      :data="walletTrans"
      :columns="columns"
      row-key="phone" :filter="filter">

      <template v-slot:top-right>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

        <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="phone" :props="props">
              {{ props.row.phone }}
          </q-td>
          <q-td key="amount" :props="props">
            <q-badge color="negative" class="text-bold">
              {{ props.row.amount }}
            </q-badge>
          </q-td>
          <q-td key="reciever" :props="props" class="text-bold">
              {{ props.row.reciever }}
          </q-td>
           <q-td key="recv_name" :props="props">
            {{ props.row.recv_name }}
          </q-td>
          <q-td key="status" :props="props">
            <q-badge :color="props.row.status == 'success' ? 'primary' : 'negative'">
              {{ props.row.status }}
            </q-badge>
          </q-td>
          <q-td key="createdAt" :props="props">
              {{ formatDate(props.row.createdAt) }}
          </q-td>
          <q-td key="action" :props="props" class="q-gutter-xs">
               <q-btn size="sm" no-caps color="negative" label="Revert" />
          </q-td>
        </q-tr>
        </template>
      </q-table>
  </div>
</template>

<script>
import { date } from 'quasar'
export default {
  // name: 'ComponentName',
  data () {
    return {
      filter: '',
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
        { name: 'action', label: 'Action', field: '' },
      ]
    }
  },

  computed: {
    walletTrans() {
      return this.$store.getters['DataAuth/walletTrans'];
    }
  },
   methods: {
    formatDate(data){
      return date.formatDate(data, 'YYYY-MM-DD')
    },
  },
}
</script>
