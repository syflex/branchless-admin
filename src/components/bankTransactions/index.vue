<template>
  <div>
    <q-table square title="Bank Transactions" :data="bankTrans" :columns="columns" row-key="phone" :filter="filter">

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
          <q-td key="account" :props="props" class="text-bold">
              {{ props.row.account }}
          </q-td>
          <q-td key="status" :props="props">
            <q-badge :color="props.row.status == 'success' ? 'primary' : 'negative'">
              {{ props.row.status }}
            </q-badge>
          </q-td>
          <q-td key="type" :props="props">
            <q-badge :color="props.row.type == 'credit' ? 'primary' : 'negative'">
              {{ props.row.type }}
            </q-badge>
          </q-td>
          <q-td key="amount" :props="props">
            <q-badge color="negative" class="text-bold">
              {{ currencyFormat((props.row.amount/100)) }}
            </q-badge>
          </q-td>
           <q-td key="charge" :props="props">
            <q-badge color="negative" class="text-bold">
              {{ currencyFormat(props.row.charge/100) }}
            </q-badge>
          </q-td>
          <q-td key="createdAt" :props="props">
              {{ formatDate(props.row.createdAt) }}
          </q-td>
          <q-td key="action" :props="props" class="q-gutter-xs">
               <q-btn size="sm" no-caps color="negative" label="Revert" disable=""/>
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
        { name: 'account', label: 'Account', field: 'account', sortable: true },
        { name: 'status', label: 'Status', field: 'status', sortable: true },
        { name: 'type', label: 'Type', field: 'type' },
        { name: 'amount', label: 'Amount', field: 'amount', sortable: true },
        { name: 'charge', label: 'Charge', field: 'charge', sortable: true },
        { name: 'createdAt', label: 'Transaction Date', field: 'createdAt', sortable: true, format: val => `${date.formatDate(val, 'YYYY-MM-DD')}` },
        { name: 'action', label: 'Action', field: '' },
      ]
    }
  },

  computed: {
     bankTrans() {
      return this.$store.getters['DataAuth/bankTrans'];
    },
  },

  methods: {
    formatDate(data){
      return date.formatDate(data, 'YYYY-MM-DD')
    },
    currencyFormat(amount){
      // Create our number formatter.
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
      });

      return formatter.format(amount); /* NGN 2,500.00 */
    },
  },
}
</script>
