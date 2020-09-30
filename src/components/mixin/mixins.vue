<template>
  <div>

  </div>
</template>

<script>
import { date } from 'quasar'
export default {
  // name: 'ComponentName',
  data () {
    return {
      currentDate: Date.now(),
      firstDate: '',
      secondDate: '',
    }
  },

  methods: {
    sortGeneralField(data, query1, query2) {
      if (query2) {
        const result = data.filter(function(data) {
          return data[query2.field] == query2.value;
        });
        return result ? result : 0;
      }else{
        return data
      }
    },

     sortGeneralField1(data, query1, query2) {
      if (query2) {
        const result = data.filter(function(data) {
          return data[query1.field] == query1.value && data[query2.field] == query2.value;
        });
        return result ? result : 0;
      }else{
        return data
      }
    },

    sortToday(data, query1, query2, type){
      console.log('day on day');
      let today;
      if (type == 'current') {
        today = date.formatDate(this.currentDate, 'DDD')
      }else if(type == 'previous'){
        today = (date.formatDate(this.currentDate, 'DDD') - 1)
      }
      //  console.log(today);
      // else if(type == 'advance'){
      //   if (dateOption == 'first') {
      //     today = (date.formatDate(this.firstDate, 'DDD'))
      //   }else if (dateOption == 'second') {
      //     today = (date.formatDate(this.secondDate, 'DDD'))
      //   }
      // }

      let result = null


      if (query2) {
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'DDD') == today && data[query2.field] == query2.value;
        });
      }else{
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'DDD') == today;
        });
      }

      return result;
    },

    sortWeek(data, query1, query2, type){
      let week;
      if (type == 'current') {
        week = date.formatDate(this.currentDate, 'w')
      }else if(type == 'previous'){
        week = (date.formatDate(this.currentDate, 'w') - 1)
      }
      // else if(type == 'adance'){
      //   if(dateOption == 'first') {
      //     week = (date.formatDate(this.firstDate, 'w'))
      //   }else if (dateOption == 'second') {
      //     week = (date.formatDate(this.secondDate, 'w'))
      //   }
      // }

      let result = null
      if (query2) {
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'w') == week && data[query2.field] == query2.value;
        });
      }else{
        console.log('ok sure');
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'w') == week;
        });
      }

      return result;
    },

    sortMonth(data, query1, query2, type){

      let month;

       if (type == 'current') {
        month = date.formatDate(this.currentDate, 'M')
      }else if(type == 'previous'){
        month = (date.formatDate(this.currentDate, 'M') - 1)
      }
      // else if(type == 'adance'){
      //   if (dateOption == 'first') {
      //     month = (date.formatDate(this.firstDate, 'M'))
      //   }else if (dateOption == 'second') {
      //     month = (date.formatDate(this.secondDate, 'M'))
      //   }
      // }


      let result = null
      if (query2) {
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'M') == month && data[query2.field] == query2.value;
        });
      }else{
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'M') == month;
        });
      }

      return result;
    },

    sortQuarter(data, query1, query2, type){
      let quarter;
       if (type == 'current') {
        quarter = date.formatDate(this.currentDate, 'Q')
      }else if(type == 'previous'){
        quarter = (date.formatDate(this.currentDate, 'Q') - 1)
      }
      // else if(type == 'adance'){
      //   if (dateOption == 'first') {
      //     quarter = (date.formatDate(this.firstDate, 'Q'))
      //   }else if (dateOption == 'second') {
      //     quarter = (date.formatDate(this.secondDate, 'Q'))
      //   }
      // }


      let result = null
      if (query2) {
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'Q') == quarter && data[query2.field] == query2.value;
        });
      }else{
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'Q') == quarter;
        });
      }

      return result;
    },

    sortYear(data, query1, query2, type){
      let year;
       if (type == 'current') {
        year = date.formatDate(this.currentDate, 'YYYY')
      }else if(type == 'previous'){
        year = (date.formatDate(this.currentDate, 'YYYY') - 1)
      }

      // else if(type == 'adance'){
      //   if (dateOption == 'first') {
      //     year = (date.formatDate(this.firstDate, 'YYYY'))
      //   }else if (dateOption == 'second') {
      //     year = (date.formatDate(this.secondDate, 'YYYY'))
      //   }
      // }


      let result = null
      if (query2) {
        result = data.filter(function(data) {
          return date.formatDate(data[query1.field], 'YYYY') == year && data[query2.field] == query2.value;
        });
      }else{
        result = data.filter(function(data) {
          console.log(date.formatDate(data[query1.field], 'YYYY'));
          return date.formatDate(data[query1.field], 'YYYY') == year;
        });
      }

      return result;
    },

  },
}
</script>
