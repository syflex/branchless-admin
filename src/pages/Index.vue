<template>
  <q-page padding class="q-py-xl row justify-center">

    <div class="col-12">
      <q-select color="grey" bg-color="primary" outlined v-model="model" :options="options" label="Filter" />
    </div>

    <!-- {{model.label}} -->

    <div class="col-md-3 col-xs-12 q-pa-sm">
      <q-card
        square
        dark
        class="transparent card-border shadow-5 hoverable shadow-transition"
      >
        <q-card-section class="column flex-center">
          <div class="text-h6 text-bold">
            <span class="text-caption text-grey-8">total</span>
            {{ users ? users.length : 0 }} | {{ sortToday(users, {field: 'createdAt', value: ''}).length }}
            <span class="text-caption text-grey-8">today</span>
            <!-- <q-icon name="fa fa-chart-line" /> -->
          </div>
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Users</div>
          </div>
        </q-card-section>

        <q-separator color="teal-10" />

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Male</div>
            <div>
              {{ sortGeneralField(users, 'gender', 'male') }} | {{ sortToday(users, {field: 'createdAt', value: ''}, {field: 'gender', value: 'male'}).length }}
            </div>
          </div>
          <div class="text-center">
            <div>Female</div>
            <div>
              {{ sortGeneralField(users, 'gender', 'female') }} | {{ sortToday(users, {field: 'createdAt', value: ''}, {field: 'gender', value: 'female'}).length }}
            </div>
          </div>
        </q-card-section>

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Active</div>
            <div>
              {{ sortGeneralField(users, 'status', 'active') }} | {{ sortToday(users, {field: 'createdAt', value: ''}, {field: 'status', value: 'active'}).length }}
            </div>
          </div>
          <div class="text-center">
            <div>Inactive</div>
            <div>
              {{ sortGeneralField(users, 'status', 'inactive') }} | {{ sortToday(users, {field: 'createdAt', value: ''}, {field: 'status', value: 'inactive'}).length }}
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-md-3 col-xs-12 q-pa-sm">
      <q-card
        square
        dark
        class="transparent card-border col-md-3 col-xs-12 shadow-5 hoverable shadow-transition"
      >
        <q-card-section class="column flex-center">
          <div class="text-h6 text-bold">
            <span class="text-caption text-grey-8">total</span>
            {{ bankTrans ? bankTrans.length : 0 }} | {{ sortToday(users, {field: 'createdAt', value: ''}).length }}
            <span class="text-caption text-grey-8">today</span>
            <!-- <q-icon name="fa fa-chart-line" /> -->
          </div>
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-piggy-bank" class="q-mr-md" />
            <div>Bank Transactions</div>
          </div>
        </q-card-section>

        <q-separator color="teal-10" />

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Success</div>
            <div>
              {{ sortGeneralField(bankTrans, 'status', 'success') }} | {{ sortToday(bankTrans, {field: 'createdAt', value: ''}, {field: 'status', value: 'success'}).length }}
            </div>
          </div>
          <div class="text-center">
            <div>Failed</div>
            <div>{{ sortGeneralField(bankTrans, 'status', 'pending') }} | {{ sortToday(bankTrans, {field: 'createdAt', value: ''}, {field: 'status', value: 'pending'}).length }}</div>
          </div>
        </q-card-section>

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Credit</div>
            <div>
              {{ sortGeneralField(bankTrans, 'type', 'credit') }} | {{ sortToday(bankTrans, {field: 'createdAt', value: ''}, {field: 'type', value: 'credit'}).length }}
            </div>
          </div>
          <div class="text-center">
            <div>Debits</div>
            <div>
              {{ sortGeneralField(bankTrans, 'type', 'debit') }} | {{ sortToday(bankTrans, {field: 'createdAt', value: ''}, {field: 'type', value: 'debit'}).length }}
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-md-3 col-xs-12 q-pa-sm">
      <q-card
        square
        dark
        class="transparent card-border col-md-3 col-xs-12 shadow-5 hoverable shadow-transition"
      >
        <q-card-section class="column flex-center">
          <div class="text-h6 text-bold">
            <span class="text-caption text-grey-8">total</span>
            {{ walletTrans ? walletTrans.length : 0 }} | {{ sortToday(users, {field: 'createdAt', value: ''}).length }}
            <span class="text-caption text-grey-8">today</span>
            <!-- <q-icon name="fa fa-chart-line" /> -->
          </div>
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-wallet" class="q-mr-md" />
            <div>Wallet Transactions</div>
          </div>
        </q-card-section>

        <q-separator color="teal-10" />

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Success</div>
            <div>
              {{ sortGeneralField(walletTrans, 'status', 'success') }} | {{ sortToday(walletTrans, {field: 'createdAt', value: ''}, {field: 'status', value: 'success'}).length }}
            </div>
          </div>
          <div class="text-center">
            <div>Failed</div>
            <div>
              {{ sortGeneralField(walletTrans, 'status', 'pending') }} | {{ sortToday(walletTrans, {field: 'createdAt', value: ''}, {field: 'status', value: 'pending'}).length }}
            </div>
          </div>
        </q-card-section>

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Success</div>
            <div>
              {{ sortGeneralField(walletTrans, 'status', 'success') }} | {{ sortToday(walletTrans, {field: 'createdAt', value: ''}, {field: 'status', value: 'success'}).length }}
            </div>
          </div>
          <div class="text-center">
            <div>Failed</div>
            <div>
              {{ sortGeneralField(walletTrans, 'status', 'pending') }} | {{ sortToday(walletTrans, {field: 'createdAt', value: ''}, {field: 'status', value: 'pending'}).length }}
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'
export default {
  name: 'PageIndex',
  data() {
    return {
      model: null,
       options: [
         {
          label: 'Total',
          value: 'all',
          description: '',
          category: '1'
        },
        {
          label: 'Day-On-Day',
          value: 'day',
          description: '',
          category: '1'
        },
        {
          label: 'Week-On-Week',
          value: 'week',
          description: '',
          category: '1'
        },
        {
          label: 'Month-On-Month',
          value: 'month',
          description: '',
          category: '1'
        },
        {
          label: 'Quaterly',
          value: 'quaterly',
          description: '',
          category: '1'
        },
        {
          label: 'Bi-Anually',
          value: 'bi-anually',
          disable: true,
          description: '',
          category: '1'
        },
        {
          label: 'Year-On-Year',
          value: 'year',
          disable: false,
          description: '',
          category: '1'
        }
      ]
    };
  },

  computed: {
    users() {
      return this.$store.getters['DataAuth/users'];
    },

    bankTrans() {
      return this.$store.getters['DataAuth/bankTrans'];
    },

    walletTrans() {
      return this.$store.getters['DataAuth/walletTrans'];
    }
  },

  async mounted() {
    await this.getAllData();
  },

  methods: {
    getAllData() {
      this.$store.dispatch('DataAuth/getUsers');
      this.$store.dispatch('DataAuth/getBankTrans');
      this.$store.dispatch('DataAuth/getWalletTrans');
    },

    sortToday(data, query1, query2){
      const today = date.formatDate(Date.now(), 'YYYY-MM-DD')
      let result = null
      if (query2) {
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'YYYY-MM-DD') == today && data[query2.field] == query2.value;
        });
      }else{
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'YYYY-MM-DD') == today;
        });
      }

      return result;
    },

    sortYesterday(data, query1, query2){
      let newDate = Date.now()
      newDate = date.subtractFromDate(newDate, { hours: 24, milliseconds: 10000 })

      const yesterday = date.formatDate(newDate, 'YYYY-MM-DD')

      let result = null
      if (query2) {
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'YYYY-MM-DD') == yesterday && data[query2.field] == query2.value;
        });
      }else{
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'YYYY-MM-DD') == yesterday;
        });
      }

      return result;
    },

    sortWeek(data, query1, query2){
      const week = date.formatDate(Date.now(), 'w')

      let result = null
      if (query2) {
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'w') == week && data[query2.field] == query2.value;
        });
      }else{
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'w') == week;
        });
      }

      return result;
    },

    sortMonth(data, query1, query2){
      const week = date.formatDate(Date.now(), 'M')

      let result = null
      if (query2) {
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'M') == week && data[query2.field] == query2.value;
        });
      }else{
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'M') == week;
        });
      }

      return result;
    },

    sortQuarter(data, query1, query2){
      const week = date.formatDate(Date.now(), 'Q')

      let result = null
      if (query2) {
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'Q') == week && data[query2.field] == query2.value;
        });
      }else{
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'Q') == week;
        });
      }

      return result;
    },

    sortYear(data, query1, query2){
      const week = date.formatDate(Date.now(), 'YYYY')

      let result = null
      if (query2) {
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'YYYY') == week && data[query2.field] == query2.value;
        });
      }else{
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'YYYY') == week;
        });
      }

      return result;
    },


    sortGeneralField(data, sortField, sortValue) {
      const result = data.filter(function(data) {
        return data[sortField] == sortValue;
      });
      return result ? result.length : 0;
    },

  }
};
</script>
