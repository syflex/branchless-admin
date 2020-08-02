<template>
  <div>
    <q-table square title="Bank Transactions" :data="plans" :columns="columns" row-key="phone" :filter="filter">

      <template v-slot:top-right>
        <create />
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
          <q-td key="amount" :props="props">
            <q-badge color="negative" class="text-bold">
              {{ currencyFormat(props.row.amount) }}
            </q-badge>
          </q-td>
          <q-td key="interval" :props="props" class="text-bold">
              {{ props.row.interval }}
          </q-td>
          <q-td key="duration" :props="props">
            <q-badge color="primary">
              {{ props.row.duration }}
            </q-badge>
          </q-td>
          <q-td key="status" :props="props">
            <q-badge :color="props.row.status == 'active' ? 'primary' : 'negative'">
              {{ props.row.status }}
            </q-badge>
          </q-td>
          <q-td key="currency" :props="props">
            <span class="text-bold">{{ props.row.currency }}</span>
          </q-td>
           <q-td key="plan_token" :props="props">
            {{ props.row.plan_token}}
          </q-td>
          <q-td key="date_created" :props="props">
              {{ formatDate(props.row.date_created) }}
          </q-td>
          <q-td key="paymentpage" :props="props" class="q-gutter-xs">
            {{ props.row.paymentpage }}
          </q-td>
        </q-tr>
        </template>
      </q-table>
  </div>
</template>

<script>
import { date } from 'quasar'
import create from './create'
export default {
  // name: 'ComponentName',
  components:{create},
  data () {
    return {
      plans: [],
      filter: '',
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Plan Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'amount', label: 'Amount', field: 'amount', sortable: true },
        { name: 'interval', align: 'center', label: 'Interval', field: 'interval', sortable: true },
        { name: 'duration', label: 'Duration', field: 'duration', sortable: true },
        { name: 'status', label: 'Status', field: 'status', sortable: true },
        { name: 'currency', label: 'Currency', field: 'currency' },

        { name: 'plan_token', label: 'Plan Token', field: 'plan_token', sortable: true },
        { name: 'date_created', label: 'Date Created', field: 'date_created', sortable: true, format: val => `${date.formatDate(val, 'YYYY-MM-DD')}` },
        { name: 'paymentpage', label: 'Paymentpage', field: 'paymentpage' },
      ]
    }
  },

  mounted() {
    this.getplans();
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
    async getplans(){
      try {
        const response = await this.$axios.get(process.env.Api + '/admin/getPlans' );
        const data = await response.data;
        this.plans = data.data
      } catch (error) {

      }
    },
  }
}
</script>
