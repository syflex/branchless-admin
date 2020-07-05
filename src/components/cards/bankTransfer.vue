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
            {{ bankTrans ? bankTrans.length : 0 }} | {{ sortToday(bankTrans, {field: 'createdAt', value: ''}).length }}
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
</template>

<script>
import mixins from 'components/mixin/mixins'
export default {
  mixins: [mixins],

  computed: {
    bankTrans() {
      return this.$store.getters['DataAuth/bankTrans'];
    },
  },

}
</script>
