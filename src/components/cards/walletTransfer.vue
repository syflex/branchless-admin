<template>
  <div>
    <q-card
        square
        dark
        class="transparent card-border col-md-3 col-xs-12 shadow-5 hoverable shadow-transition"
      >
        <q-card-section class="column flex-center">
          <div class="text-h6 text-bold">
            <span class="text-caption text-grey-8">total</span>
            {{ walletTrans ? walletTrans.length : 0 }} | {{ sortToday(walletTrans, {field: 'createdAt', value: ''}).length }}
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
</template>

<script>
import mixins from 'components/mixin/mixins'
export default {
  mixins: [mixins],

  computed: {
     walletTrans() {
      return this.$store.getters['DataAuth/walletTrans'];
    }
  },

}
</script>
