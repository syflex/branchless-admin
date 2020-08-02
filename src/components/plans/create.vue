<template>
  <div>
    <q-btn color="primary" no-caps label="Create Plan" @click="open = true"/>

    <q-dialog v-model="open">
    <q-card>
      <q-card-section>
        <div class="text-h6">Create Plan</div>
      </q-card-section>
      <q-card-section class="column q-gutter-sm">
          <q-input dense outlined v-model="form.name" label="Plan Name" />
          <q-input dense outlined v-model="form.amount" label="Plan Amount" />
          <q-input dense outlined v-model="form.interval" label="Interval" />
          <q-input dense outlined v-model="form.duration" label="Duration" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Save" color="primary" @click="createPlan()" :loading="loading" />
        <q-btn flat label="Cancel" color="negative" v-close-popup />
      </q-card-actions>
    </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      open: false,
      loading: false,
      form:{
        amount: '',
        name: '',
        interval: '',
        duration: ''
      }
    }
  },

  methods: {
    async createPlan(){
      this.loading = true
      const response = await this.$axios.post(process.env.Api + '/admin/createPlan', this.form)
      this.open = false
      this.loading = false
    }
  },
}
</script>
