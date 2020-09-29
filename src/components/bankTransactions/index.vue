<template>
  <div>
    <q-table square title="Bank Transactions" :data="bankTrans" :columns="columns" row-key="phone" :filter="filter">

      <template v-slot:top-right>
        <q-btn color="primary" icon-right="archive" class="q-mr-sm"
          label="Export to csv" no-caps
          @click="exportTable"
        />
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

        <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{'to be updated'}}
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
          <q-td key="txRef" :props="props">
            {{ props.row.txRef }}
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
import { exportFile } from 'quasar'
function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}
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
        { name: 'txRef', label: 'Transaction Ref', field: 'txRef', sortable: true },
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
    exportTable () {
      // naive encoding to csv format
      const data = this.$store.getters['DataAuth/bankTrans']
      const content = [ this.columns.map(col => wrapCsvValue(col.label)) ].concat(
        data.map(row => this.columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === void 0 ? col.name : col.field],
          col.format
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'table-export.csv',
        content,
        'text/csv'
      )

      if (status !== true) {
        this.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
    }
  },
}
</script>
