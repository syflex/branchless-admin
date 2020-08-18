<template>
  <div>
    <q-table square
      title="Savings"
      :data="savings"
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
            {{ name }}
          </q-td>
          <q-td key="phone" :props="props">
              {{ props.row.phone }}
          </q-td>
          <q-td key="status" :props="props">
            <q-badge :color="props.row.status == 'success' ? 'primary' : 'negative'">
              {{ props.row.status }}
            </q-badge>
          </q-td>
           <q-td key="plan" :props="props">
              {{ props.row.plan }}
          </q-td>
           <q-td key="txRef" :props="props">
              {{ props.row.txRef }}
          </q-td>
           <q-td key="duration" :props="props">
            <q-badge color="primary" class="text-bold">
              {{ props.row.duration }}
            </q-badge>
          </q-td>
           <q-td key="count" :props="props">
               <q-badge color="primary" class="text-bold">
              {{ props.row.count }}
            </q-badge>
          </q-td>
           <q-td key="total" :props="props">
            <q-badge color="negative" class="text-bold">
              {{ currencyFormat(props.row.total) }}
            </q-badge>
          </q-td>
          <q-td key="amount" :props="props">
            <q-badge color="negative" class="text-bold">
              {{ currencyFormat(props.row.amount) }}
            </q-badge>
          </q-td>
          <q-td key="createdAt" :props="props">
              {{ formatDate(props.row.createdAt) }}
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
  props:['savings', 'name'],
  data () {
    return {
      filter: '',
      columns: [
        {
          name: 'name', required: true, label: 'Full Name',
          align: 'left', field: row => row.name, format: val => `${val}`,
          sortable: true
        },
        { name: 'phone', align: 'center', label: 'Phone', field: 'phone', sortable: true },
        { name: 'status', label: 'Status', field: 'status', sortable: true },
        { name: 'plan', label: 'Plan', field: 'plan', sortable: true },
        { name: 'txRef', label: 'Transaction Ref', field: 'txRef', sortable: true },
        { name: 'duration', label: 'Duration', field: 'duration', sortable: true },
        { name: 'count', label: 'Count', field: 'count', sortable: true },
        { name: 'total', label: 'Total', field: 'total' },
        { name: 'amount', label: 'Amount', field: 'amount', sortable: true },
        { name: 'createdAt', label: 'Transaction Date', field: 'createdAt', sortable: true, format: val => `${date.formatDate(val, 'YYYY-MM-DD')}` },

      ]
    }
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

      return formatter.format(amount); /* $2,500.00 */
    },

     async getUsername(phone){
        const response = await this.$axios.post(process.env.Api + '/admin/userName', { phone: phone })
        const data = response.data;
        const name = data.name;
        return name
    }
  }
}
</script>
