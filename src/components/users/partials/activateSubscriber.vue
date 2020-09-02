<template>
  <div>
      <q-btn color="negative" no-caps="" dense @click="open = true"
            label="Activate Subscription" :loading="loading">
                <template v-slot:loading>
                  <div class="text-italic">
                      <q-spinner-oval /> Activating agents subscription...
                  </div>
                </template>
      </q-btn>

    <q-dialog v-model="open">
      <q-card>
        <q-card-section>
          <div class="text-h6">Activate Subscription</div>
        </q-card-section>
        <q-card-section>
          <q-input filled v-model="currentDate" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="currentDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="negative" v-close-popup />
          <q-btn flat label="Activate" color="primary" @click="enableAgentSubscription(phone)"
              :loading="loading">
                    <template v-slot:loading>
                      <div class="text-italic">
                          <q-spinner-oval /> Activating agents subscription...
                      </div>
                    </template>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>


  </div>
</template>
<script>
import { date } from 'quasar'
export default {
  props:['phone'],
  data() {
    return {
      loading: false,
      open: false,
      currentDate: date.formatDate(new Date(), 'YYYY/MM/DD'),
    }
  },

  mounted() {
    this.getUser(this.phone);
  },

  methods: {
    async getUser(phone){
      try {
        const response = await this.$axios.post(process.env.Api + '/admin/findUser', { phone: phone });
        const data = await response.data;
        this.user = data.data
      } catch (error) {

      }
    },

    async enableAgentSubscription(phone){
      this.loading = true;
      const currentDate = date.formatDate(this.currentDate, 'YYYY-MM-DD')
      try {
        const response = await this.$axios.post(process.env.Api + '/admin/subscribeUser', { phone: phone, date: currentDate });
        const data = await response.data;
        this.getUser(this.$route.params.phone);
        this.$q.notify({ color: 'primary', message: 'Subscription: Activated agent subscription', icon: 'info'})
        this.loading = false
        this.open = false
      } catch (error) {
        this.loading = false
      }
    },
  },
}
</script>
