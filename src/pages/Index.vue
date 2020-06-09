<template>
  <q-page padding class="q-py-xl row justify-center">
    <div class="col-md-3 col-xs-12 q-pa-sm">
      <q-card
        square
        dark
        class="transparent card-border shadow-5 hoverable shadow-transition"
      >
        <q-card-section class="column flex-center">
          <div class="text-h6 text-bold">
            {{ users ? users.length : 0 }}
            <q-icon name="fa fa-chart-line" />
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
            <div>{{ sortUsers(users, 'male') }}</div>
          </div>
          <div class="text-center">
            <div>Female</div>
            <div>{{ sortUsers(users, 'female') }}</div>
          </div>
        </q-card-section>

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Active</div>
            <div>{{ sortStatus(users, 'active') }}</div>
          </div>
          <div class="text-center">
            <div>Inactive</div>
            <div>{{ sortStatus(users, 'inactive') }}</div>
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
            {{ bankTrans ? bankTrans.length : 0 }}
            <q-icon name="fa fa-chart-line" />
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
            <div>{{ sortStatus(bankTrans, 'success') }}</div>
          </div>
          <div class="text-center">
            <div>Failed</div>
            <div>{{ sortStatus(bankTrans, 'pending') }}</div>
          </div>
        </q-card-section>

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Credit</div>
            <div>{{ sortType(bankTrans, 'credit') }}</div>
          </div>
          <div class="text-center">
            <div>Debits</div>
            <div>{{ sortType(bankTrans, 'debit') }}</div>
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
            {{ walletTrans ? walletTrans.length : 0 }}
            <q-icon name="fa fa-chart-line" />
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
            <div>{{ sortStatus(walletTrans, 'success') }}</div>
          </div>
          <div class="text-center">
            <div>Failed</div>
            <div>{{ sortStatus(walletTrans, 'pending') }}</div>
          </div>
        </q-card-section>

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Success</div>
            <div>{{ sortStatus(walletTrans, 'success') }}</div>
          </div>
          <div class="text-center">
            <div>Failed</div>
            <div>{{ sortStatus(walletTrans, 'pending') }}</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {};
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

    filterData(value) {
      const result = this.filterByValue(this.jobs.jobs, value);
      this.jobsEntry = result;
    },

    filterByValue(array, string) {
      return array.filter(o =>
        Object.keys(o).some(k =>
          o[k]
            .toString()
            .toLowerCase()
            .includes(string.toLowerCase())
        )
      );
    },

    sortUsers(users, gender) {
      const result = users.filter(function(user) {
        return user.gender == gender;
      });

      return result ? result.length : 0;
    },

    sortStatus(data, status) {
      const result = data.filter(function(data) {
        return data.status == status;
      });
      return result ? result.length : 0;
    },

    sortType(data, type) {
      const result = data.filter(function(data) {
        return data.type == type;
      });
      return result ? result.length : 0;
    }
  }
};
</script>
