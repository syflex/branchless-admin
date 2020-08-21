<template>
  <div>
    <q-card
        square
        dark
        class="transparent card-border col-md-3 col-xs-12 shadow-5 hoverable shadow-transition"
      >
        <q-card-section class="column flex-center">
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-wallet" class="q-mr-md" />
            <div>Wallet Transactions</div>
          </div>
          <div class="text-h6 text-bold">
            <span class="text-caption text-grey-8">total</span>
            {{ leftFunc({ field: 'createdAt', value: '' }, false) }}
            |
            {{ rightFunc( {field: 'createdAt', value: ''}, false) }}
            <span class="text-caption text-grey-8">today</span>
          </div>
        </q-card-section>

        <q-separator color="teal-10" />

        <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Success</div>
            <div>
              {{ leftFunc({field: 'createdAt', value: ''}, {field: 'status', value: 'success'}) }}
              |
              {{ rightFunc({field: 'createdAt', value: ''}, {field: 'status', value: 'success'}) }}
            </div>
          </div>
          <div class="text-center">
            <div>Failed</div>
            <div>
              {{ leftFunc({field: 'createdAt', value: ''}, {field: 'status', value: 'pending'}) }}
              |
              {{ rightFunc({field: 'createdAt', value: ''}, {field: 'status', value: 'pending'}) }}
            </div>
          </div>
        </q-card-section>

        <!-- <q-card-section class="row justify-between">
          <div class="text-center">
            <div>Success</div>
            <div>
              {{ leftFunc({field: 'createdAt', value: ''}, {field: 'status', value: 'success'}) }}
              |
              {{ rightFunc({field: 'createdAt', value: ''}, {field: 'status', value: 'success'}) }}
            </div>
          </div>
          <div class="text-center">
            <div>Failed</div>
            <div>
              {{ leftFunc({field: 'createdAt', value: ''}, {field: 'status', value: 'pending'}) }}
              |
              {{ rightFunc({field: 'createdAt', value: ''}, {field: 'status', value: 'pending'}) }}
            </div>
          </div>
        </q-card-section> -->

      </q-card>
  </div>
</template>

<script>
import mixins from 'components/mixin/mixins'
export default {
  props:['filter'],

  mixins: [mixins],

  methods: {
    getFilterLabel(){
      const filter = this.filter;
      if (filter) {
         if(filter.value == 'day'||filter.value == 'week'||filter.value == 'month'||filter.value == 'year'){
            return filter.value;
          }else if(filter.value == 'quaterly'){
            return 'quater'
          }
      }

    },

    // 1: data, 2:query1, 3:query2, 4:filter
    leftFunc(query1, query2){
      const data = this.$store.getters['DataAuth/walletTrans'];
      const filter = this.filter;

      if(filter && filter.value == 'day' && filter.type == 'base'){
        return this.sortToday(data, query1, query2, 'previous').length
      }else if(filter && filter.value == 'week' && filter.type == 'base'){
        return this.sortWeek(data, query1, query2, 'previous').length
      }else if(filter && filter.value == 'month' && filter.type == 'base'){
        return this.sortMonth(data, query1, query2, 'previous').length
      }else if(filter && filter.value == 'quaterly' && filter.type == 'base'){
        return this.sortQuarter(data, query1, query2, 'previous').length
      }else if(filter && filter.value == 'year' && filter.type == 'base'){
        return this.sortYear(data, query1, query2, 'previous').length
      }else{
        return this.sortGeneralField(data, query1, query2).length
      }
    },

    rightFunc(query1, query2){
       const data = this.$store.getters['DataAuth/walletTrans'];
      const filter = this.filter;

      if(filter && filter.value == 'day' && filter.type == 'base'){
        return this.sortToday(data, query1, query2, 'current').length
      }else if(filter && filter.value == 'week' && filter.type == 'base'){
        return this.sortWeek(data, query1, query2, 'current').length
      }else if(filter && filter.value == 'month' && filter.type == 'base'){
        return this.sortMonth(data, query1, query2, 'current').length
      }else if(filter && filter.value == 'quaterly' && filter.type == 'base'){
        return this.sortQuarter(data, query1, query2, 'current').length
      }else if(filter && filter.value == 'year' && filter.type == 'base'){
        return this.sortYear(data, query1, query2, 'current').length
      }else{
        return this.sortToday(data, query1, query2, 'current').length
      }
    }

  },

}
</script>
