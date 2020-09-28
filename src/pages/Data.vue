<template>
  <q-page padding class="q-py-xl row justify-center">

    <div class="col-12">
      <q-select color="grey" dense  bg-color="primary" outlined v-model="model" :options="options" label="Filter" />
    </div>

    <div class="col-md-3 col-xs-12 q-pa-sm">
      <user :filter="model" />
    </div>

    <div class="col-md-3 col-xs-12 q-pa-sm">
      <bankTransfer :filter="model" />
    </div>

    <div class="col-md-3 col-xs-12 q-pa-sm">
      <walletTransfer :filter="model" />
    </div>
  </q-page>
</template>

<script>
import user from 'components/cards/user'
import bankTransfer from 'components/cards/bankTransfer'
import walletTransfer from 'components/cards/walletTransfer'
export default {
  name: 'PageIndex',
  components:{ user,bankTransfer,walletTransfer },

  data() {
    return {
      model: null,
      currentDate: Date.now(),
      firstDate: '',
      secondDate: '',
       options: [
         {
          label: 'Total',
          value: 'all',
          description: '',
          type: 'base'
        },
        {
          label: 'Day-On-Day',
          value: 'day',
          description: '',
          type: 'base'
        },
        {
          label: 'Week-On-Week',
          value: 'week',
          description: '',
          type: 'base'
        },
        {
          label: 'Month-On-Month',
          value: 'month',
          description: '',
          type: 'base'
        },
        {
          label: 'Quaterly',
          value: 'quaterly',
          description: '',
          type: 'base'
        },
        {
          label: 'Bi-Anually',
          value: 'bi-anually',
          disable: true,
          description: '',
          type: 'base'
        },
        {
          label: 'Year-On-Year',
          value: 'year',
          disable: false,
          description: '',
          type: 'base'
        }
      ]
    };
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

    // sortToday(data, query1, query2, type, dateOption){
    //   let today;
    //   if (type == 'current') {
    //     today = date.formatDate(this.current_date, 'DDD')
    //   }else if(type == 'previous'){
    //     today = (date.formatDate(this.current_date, 'DDD') - 1)
    //   }else if(type == 'adance'){
    //     if (dateOption == 'first') {
    //       today = (date.formatDate(this.firstDate, 'DDD'))
    //     }else if (dateOption == 'second') {
    //       today = (date.formatDate(this.secondDate, 'DDD'))
    //     }
    //   }


    //   let result = null
    //   if (query2) {
    //     result = data.filter(function(data) {
    //       return date.formatDate(data[query1.field], 'DDD') == today && data[query2.field] == query2.value;
    //     });
    //   }else{
    //     result = data.filter(function(data) {
    //       return date.formatDate(data[query1.field], 'DDD') == today;
    //     });
    //   }

    //   return result;
    // },

    // sortYesterday(data, query1, query2){
    //   let newDate = Date.now();
    //   newDate = date.subtractFromDate(newDate, { hours: 24, milliseconds: 10000 })

    //   const yesterday = date.formatDate(newDate, 'YYYY-MM-DD')

    //   let result = null
    //   if (query2) {
    //     result = data.filter(function(data) {
    //       return date.formatDate(data[query1.field], 'YYYY-MM-DD') == yesterday && data[query2.field] == query2.value;
    //     });
    //   }else{
    //     result = data.filter(function(data) {
    //       return date.formatDate(data[query1.field], 'YYYY-MM-DD') == yesterday;
    //     });
    //   }

    //   return result;
    // },

    // sortWeek(data, query1, query2, type, dateOption){
    //   let week;
    //   if (type == 'current') {
    //     week = date.formatDate(this.current_date, 'w')
    //   }else if(type == 'previous'){
    //     week = (date.formatDate(this.current_date, 'w') - 1)
    //   }else if(type == 'adance'){
    //     if (dateOption == 'first') {
    //       week = (date.formatDate(this.firstDate, 'w'))
    //     }else if (dateOption == 'second') {
    //       week = (date.formatDate(this.secondDate, 'w'))
    //     }
    //   }

    //   let result = null
    //   if (query2) {
    //     result = data.filter(function(data) {
    //       return date.formatDate(data[query1.field], 'w') == week && data[query2.field] == query2.value;
    //     });
    //   }else{
    //     result = data.filter(function(data) {
    //       return date.formatDate(data[query1.field], 'w') == week;
    //     });
    //   }

    //   return result;
    // },

    // sortMonth(data, query1, query2, type, dateOption){

    //   let month;

    //    if (type == 'current') {
    //     month = date.formatDate(this.current_date, 'M')
    //   }else if(type == 'previous'){
    //     month = (date.formatDate(this.current_date, 'M') - 1)
    //   }else if(type == 'adance'){
    //     if (dateOption == 'first') {
    //       month = (date.formatDate(this.firstDate, 'M'))
    //     }else if (dateOption == 'second') {
    //       month = (date.formatDate(this.secondDate, 'M'))
    //     }
    //   }


    //   let result = null
    //   if (query2) {
    //     result = data.filter(function(data) {
    //       return date.formatDate(data[query1.field], 'M') == month && data[query2.field] == query2.value;
    //     });
    //   }else{
    //     result = data.filter(function(data) {
    //       return date.formatDate(data[query1.field], 'M') == month;
    //     });
    //   }

    //   return result;
    // },

    // sortQuarter(data, query1, query2, type){
    //   let quarter;
    //    if (type == 'current') {
    //     quarter = date.formatDate(this.current_date, 'Q')
    //   }else if(type == 'previous'){
    //     quarter = (date.formatDate(this.current_date, 'Q') - 1)
    //   }else if(type == 'adance'){
    //     if (dateOption == 'first') {
    //       quarter = (date.formatDate(this.firstDate, 'Q'))
    //     }else if (dateOption == 'second') {
    //       quarter = (date.formatDate(this.secondDate, 'Q'))
    //     }
    //   }


    //   let result = null
    //   if (query2) {
    //     result = data.filter(function(data) {
    //       return date.formatDate(data[query1.field], 'Q') == quarter && data[query2.field] == query2.value;
    //     });
    //   }else{
    //     result = data.filter(function(data) {
    //       return date.formatDate(data[query1.field], 'Q') == quarter;
    //     });
    //   }

    //   return result;
    // },

    // sortYear(data, query1, query2, type, dateOption){
    //   let year;
    //    if (type == 'current') {
    //     year = date.formatDate(this.current_date, 'YYYY')
    //   }else if(type == 'previous'){
    //     year = (date.formatDate(this.current_date, 'YYYY') - 1)
    //   }else if(type == 'adance'){
    //     if (dateOption == 'first') {
    //       year = (date.formatDate(this.firstDate, 'YYYY'))
    //     }else if (dateOption == 'second') {
    //       year = (date.formatDate(this.secondDate, 'YYYY'))
    //     }
    //   }


    //   let result = null
    //   if (query2) {
    //     result = data.filter(function(data) {
    //       return date.formatDate(data[query1.field], 'YYYY') == year && data[query2.field] == query2.value;
    //     });
    //   }else{
    //     result = data.filter(function(data) {
    //       return date.formatDate(data[query1.field], 'YYYY') == year;
    //     });
    //   }

    //   return result;
    // },


    // sortGeneralField(data, sortField, sortValue) {
    //   const result = data.filter(function(data) {
    //     return data[sortField] == sortValue;
    //   });
    //   return result ? result.length : 0;
    // },



  }
};
</script>
