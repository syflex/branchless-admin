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
        <q-btn rounded color="primary" @click="login()" no-caps label="Login" class="full-width"/>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      form:{
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async login(){
        this.$axio.post(process.env.Admin_Api+'/api/login', this.form)
        await this.$store.dispatch('DataAuth/login');
        this.$router.push({name: 'analytics'});
    }
  },
}
</script>
