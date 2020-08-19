<template>
  <div>

    <div class="row q-mb-sm">
      <q-field dense color="black" bg-color="white" outlined label="Full Name" stack-label class="col-xs-12 col-sm-6 col-md-3 q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ user[0].name }}</div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="Wallet Balance" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ userWallet ? currencyFormat(userWallet.data.balance) : 'server error'  }}</div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="Phone Number" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ user[0].phone }}</div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="UUID" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ user[0].uid }}</div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="Location" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ user[0].location }}</div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="Date Of Birth" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ formatDate(user[0].date_of_birth) }}</div>
        </template>
      </q-field>

      <q-field dense color="black" bg-color="white" outlined label="Gender" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ user[0].gender }}</div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="Verified" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">
            <q-badge :color="user[0].verified ? 'primary' : 'negative'" :label="user[0].verified ? 'verified' : 'Unverified'" />
          </div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="Status" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">
            <q-badge :color="user[0].status === 'active' ? 'primary' : 'negative'" :label="user[0].status" />
          </div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="Agent" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">
            <q-badge :color="user[0].agent ? 'primary' : 'secondary'"  :label="user[0].agent ? 'Agent' : 'None Agent'" />
          </div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="Subscribed" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">
            <q-badge :color="user[0].subscribed ? 'primary' : 'negative'" :label="user[0].subscribed ? 'Subscriber' : 'None Subscriber'" />

          </div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="Due Date" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ user[0].due_date }}</div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="Email" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ user[0].email }}</div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="Date Created" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ formatDate(user[0].createdAt) }}</div>
        </template>
      </q-field>
      <q-field dense color="black" bg-color="white" outlined label="Date Updated" stack-label class="col-xs-12 col-sm-6 col-md-3  q-pa-xs">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{ formatDate(user[0].updatedAt) }}</div>
        </template>
      </q-field>

    </div>

    <savingsConp v-if="userSavings.data.length"  :savings="userSavings.data" :name="user[0].name" class="q-mb-sm"/>

    <walletComp v-if="userWalletTrans.data.length" :walletTrans="userWalletTrans.data" :name="user[0].name" class="q-mb-sm"/>
    <bankComp v-if="userBankTrans.data.length" :bankTrans="userBankTrans.data" :name="user[0].name" class="q-mb-sm"/>
  </div>
</template>

<script>
import { date } from 'quasar'
import savingsConp from './partials/savings'
import walletComp from './partials/walletTrans'
import bankComp from './partials/bankTrans'
export default {
  // name: 'ComponentName',
  components:{savingsConp,walletComp,bankComp},
  data () {
    return {
      user: '',
      userWallet: '',
      userSavings: [],
      userWalletTrans: [],
      userBankTrans: []
    }
  },

  mounted() {
    this.getUser(this.$route.params.phone);
    this.getUserWallet(this.$route.params.phone);
    this.getUserSavings(this.$route.params.phone);
    this.getUserWalletTrans(this.$route.params.phone);
    this.getUserBankTrans(this.$route.params.phone);
  },

  methods: {
    formatDate(data){
      return date.formatDate(data, 'YYYY-MM-DD')
    },
    currencyFormat(amount){
      // Create our number formatter.
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
      });

      return formatter.format(amount); /* $2,500.00 */
    },
    async getUser(phone){
      this.loading = phone;
      try {
        const response = await this.$axios.post(process.env.Api + '/admin/findUser', { phone: phone });
        const data = await response.data;
        this.user = data.data
      } catch (error) {

      }
    },

    async getUserWallet(phone){
      this.loading = phone;
      try {
        const response = await this.$axios.post(process.env.Api + '/admin/userBalance', {phone: phone});
        const data = response.data;
        this.userWallet = data
      } catch (error) {

      }
    },

    async getUserSavings(phone){
      this.loading = phone;
      try {
        const response = await this.$axios.get(process.env.Api + '/admin/userSavings?phone='+ phone);
        const data = await response.data;
        this.userSavings = data
      } catch (error) {

      }
    },

    async getUserWalletTrans(phone){
      this.loading = phone;
      try {
        const response = await this.$axios.get(process.env.Api + '/admin/userWalletTrans?phone='+ phone);
        const data = response.data;
        this.userWalletTrans = data
      } catch (error) {

      }
    },

    async getUserBankTrans(phone){
      this.loading = phone;
      try {
        const response = await this.$axios.get(process.env.Api + '/admin/userBankTrans?phone='+ phone);
        const data = response.data;
        this.userBankTrans = data
      } catch (error) {

      }
    },

  },
}
</script>
