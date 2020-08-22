<template>
  <div>
    <q-card flat dark class="bg-transparent">
      <div class="column flex-center">
        <img src="statics/branchlessLogoWhite.png" style="max-width: 300px">
      </div>

      <q-card-section class="q-gutter-sm">
        <q-input dark outlined dense rounded v-model="form.email" label="Enter username" >
          <template v-slot:prepend>
            <div class="row flex-center">
              <q-icon name="ion-ios-person" />
              <div class="q-px-sm">|</div>
            </div>
          </template>
        </q-input>
        <q-input dark type="password" outlined dense rounded v-model="form.password" label="Enter Your Password" >
          <template v-slot:prepend>
            <q-icon name="ion-unlock" />
            <div class="q-px-sm">|</div>
          </template>
        </q-input>

      </q-card-section>
      <q-card-section>
        <q-btn rounded color="primary" @click="login()" no-caps label="Login" :type="isPwd ? 'password' : 'text'" class="full-width" :disabled="!formIsValid">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
        </q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      isPwd: true,
      loading: false,
      form:{
        email: '',
        password: ''
      }
    }
  },

  computed: {
    formIsValid () {
      return this.form.email !== '' &&
            this.form.password !== ''
    },
  },

  methods: {
    async login(){
        const response = this.$axios.post(process.env.Api+'/admin/login', { phone: this.form.email, pin: this.form.email})
        const data = response.data
        this.$axios.defaults.headers.common['Authorization'] = data.token;
        commit('login', { data: data });
        // await this.$store.dispatch('DataAuth/login');
        // this.$router.push({name: 'users'});
    }
  },
}
</script>
