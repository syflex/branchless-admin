<template>
  <q-page padding class="q-py-xl row justify-center">

<div class="row">
    <div class="col-md-3 col-xs-12 q-pa-sm">

      <q-card square dark class="transparent card-border shadow-5 hoverable shadow-transition">
        <q-card-section class="column flex-center">
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Total Users</div>
          </div>

          <div class="text-h3 text-bold">
             {{ getData(users , {field: 'createdAt', value: ''}, false) }}
          </div>
        </q-card-section>
      </q-card>

    </div>

<div class="col-md-3 col-xs-12 q-pa-sm">
      <q-card square dark class="transparent card-border shadow-5 hoverable shadow-transition">
        <q-card-section class="column flex-center">
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Total Regular Users</div>
          </div>

          <div class="text-h3 text-bold">
            {{ getData(users ,{field: 'createdAt', value: ''},{field: 'agent', value: 0}) }}
          </div>
        </q-card-section>
      </q-card>
</div>

<div class="col-md-3 col-xs-12 q-pa-sm">
      <q-card square dark class="transparent card-border shadow-5 hoverable shadow-transition">
        <q-card-section class="column flex-center">
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Total Agents Users</div>
          </div>

          <div class="text-h3 text-bold">
            {{ getData(users ,{field: 'createdAt', value: ''},{field: 'agent', value: 1}) }}
          </div>
        </q-card-section>
      </q-card>

</div>

<div class="col-md-3 col-xs-12 q-pa-sm">
      <q-card square dark class="transparent card-border shadow-5 hoverable shadow-transition">
        <q-card-section class="column flex-center">
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Total Weekly Agent Users</div>
          </div>

          <div class="text-h3 text-bold">
            {{ weekData(users , {field: 'agent', value: 1}, false) }}
          </div>
        </q-card-section>
      </q-card>
</div>


<div class="col-md-3 col-xs-12 q-pa-sm">
       <q-card square dark class="transparent card-border shadow-5 hoverable shadow-transition">
        <q-card-section class="column flex-center">
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Total Annual Agent Users</div>
          </div>

          <div class="text-h3 text-bold">
             {{ getData(users ,{field: 'createdAt', value: ''},{field: 'agent', value: 1}) }}
          </div>
        </q-card-section>
      </q-card>
</div>


<div class="col-md-3 col-xs-12 q-pa-sm">
       <q-card square dark class="transparent card-border shadow-5 hoverable shadow-transition">
        <q-card-section class="column flex-center">
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Total Subscribed</div>
          </div>

          <div class="text-h3 text-bold">
             {{ getData(users ,{field: 'createdAt', value: ''},{field: 'subscribed', value: 1}) }}
          </div>
        </q-card-section>
      </q-card>
</div>


<div class="col-md-3 col-xs-12 q-pa-sm">
      <q-card square dark class="transparent card-border shadow-5 hoverable shadow-transition">
        <q-card-section class="column flex-center">
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Total Male</div>
          </div>

          <div class="text-h3 text-bold">
            {{ getData(users ,{field: 'createdAt', value: ''},{field: 'gender', value: 'male'}) }}
          </div>
        </q-card-section>
      </q-card>
</div>

<div class="col-md-3 col-xs-12 q-pa-sm">
      <q-card square dark class="transparent card-border shadow-5 hoverable shadow-transition">
        <q-card-section class="column flex-center">
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Total Female</div>
          </div>

          <div class="text-h3 text-bold">
             {{ getData(users ,{field: 'createdAt', value: ''},{field: 'gender', value: 'female'}) }}
          </div>
        </q-card-section>
      </q-card>
</div>

<div class="col-md-3 col-xs-12 q-pa-sm">
      <q-card square dark class="transparent card-border shadow-5 hoverable shadow-transition">
        <q-card-section class="column flex-center">
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Total Active Status</div>
          </div>

          <div class="text-h3 text-bold">
             {{ getData(users ,{field: 'createdAt', value: ''},{field: 'status', value: 'active'}) }}
          </div>
        </q-card-section>
      </q-card>
</div>

<div class="col-md-3 col-xs-12 q-pa-sm">
      <q-card square dark class="transparent card-border shadow-5 hoverable shadow-transition">
        <q-card-section class="column flex-center">
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Total Pending Status</div>
          </div>

          <div class="text-h3 text-bold">
             {{ getData(users ,{field: 'createdAt', value: ''},{field: 'status', value: 'pending'}) }}
          </div>
        </q-card-section>
      </q-card>
</div>

<div class="col-md-3 col-xs-12 q-pa-sm">
      <q-card square dark class="transparent card-border shadow-5 hoverable shadow-transition">
        <q-card-section class="column flex-center">
          <div class="text-bold row flex-center">
            <q-icon name="fa fa-users" class="q-mr-md" />
            <div>Total POS units</div>
          </div>

          <div class="text-h6 text-bold">Not Available Yet</div>
        </q-card-section>
      </q-card>

    </div>

    <!-- <div class="col-12">
      <q-select color="grey" dense  bg-color="primary" outlined v-model="model" :options="options" label="Filter" />
    </div>



    <div class="col-md-3 col-xs-12 q-pa-sm">
      <bankTransfer :filter="model" />
    </div>

    <div class="col-md-3 col-xs-12 q-pa-sm">
      <walletTransfer :filter="model" />
    </div> -->

</div>
  </q-page>
</template>

<script>
import mixins from 'components/mixin/mixins'
export default {
  name: 'PageIndex',

  mixins: [mixins],

  data() {
    return {
      model: null,
      currentDate: Date.now(),
    };
  },

  computed: {
    users() {
      return this.$store.getters['DataAuth/users'];
    },
  },

  async mounted() {
      await this.getAllData();
  },

  methods: {
    getAllData() {
      this.$store.dispatch('DataAuth/getUsers');
      // this.$store.dispatch('DataAuth/getBankTrans');
      // this.$store.dispatch('DataAuth/getWalletTrans');
    },

    getData(data, query1, query2){
      // console.log(data, query1, query2);
      return this.sortGeneralField(data, query1, query2).length
    },
    weekData(data, query1, query2){
      // console.log(data, query1, query2);
      return this.sortWeek(data, query1, query2).length
    },
    annualData(data, query1, query2){
      // console.log(data, query1, query2);
      return this.sortYear(data, query1, query2).length
    },
  }
};
</script>
