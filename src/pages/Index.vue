<template>
  <q-page padding class="q-py-xl row">

    <q-card square dark class="transparent card-border col-3 shadow-5 hoverable shadow-transition">
      <q-card-section class="column flex-center">
         <div class="text-h6 text-bold">
         {{ users ? users.length : 0}}
          <q-icon name="fa fa-chart-line" />
        </div>
        <div class="text-bold row flex-center">
          <q-icon name="fa fa-users" class="q-mr-md" />
          <div>Users</div>
        </div>
      </q-card-section>

      <q-separator color="teal-10"/>

      <q-card-section class="row justify-between">
        <div>
          <div>Male</div>
          <div>200</div>
        </div>
        <div>
          <div>Female</div>
          <div>200</div>
        </div>
      </q-card-section>
    </q-card>


    <q-card square dark class="transparent card-border col-3 shadow-5 hoverable shadow-transition">
      <q-card-section class="column flex-center">
         <div class="text-h6 text-bold">
         {{ bankTrans ? bankTrans.length : 0}}
          <q-icon name="fa fa-chart-line" />
        </div>
        <div class="text-bold row flex-center">
          <q-icon name="fa fa-piggy-bank" class="q-mr-md" />
          <div>Bank Transactions</div>
        </div>
      </q-card-section>

      <q-separator color="teal-10"/>

      <q-card-section class="row justify-between">
        <div>
          <div>Male</div>
          <div>200</div>
        </div>
        <div>
          <div>Female</div>
          <div>200</div>
        </div>
      </q-card-section>
    </q-card>


    <q-card square dark class="transparent card-border col-3 shadow-5 hoverable shadow-transition">
      <q-card-section class="column flex-center">
         <div class="text-h6 text-bold">
         {{ walletTrans ? walletTrans.length : 0}}
          <q-icon name="fa fa-chart-line" />
        </div>
        <div class="text-bold row flex-center">
          <q-icon name="fa fa-wallet" class="q-mr-md" />
          <div>Wallet Transactions</div>
        </div>
      </q-card-section>

      <q-separator color="teal-10"/>

      <q-card-section class="row justify-between">
        <div>
          <div>Male</div>
          <div>200</div>
        </div>
        <div>
          <div>Female</div>
          <div>200</div>
        </div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>

export default ({
  name: 'PageIndex',
  data() {
    return {

   };
  },

  computed: {
      users(){
        return this.$store.getters['DataAuth/users'];
      },

      bankTrans(){
        return this.$store.getters['DataAuth/bankTrans'];
      },

      walletTrans(){
        return this.$store.getters['DataAuth/walletTrans'];
      }
  },

  mounted() {
    this.getAllData()
  },

  methods: {
    login(){
      this.$store.dispatch('DataAuth/login')
    },

    getAllData(){
      this.$store.dispatch('DataAuth/getUsers')
      this.$store.dispatch('DataAuth/getBankTrans')
      this.$store.dispatch('DataAuth/getWalletTrans')
    }
  },
});
</script>
