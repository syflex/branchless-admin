<template>
  <q-page padding>
    <!-- content -->
    <users v-if="$route.name == 'users'"/>
    <userDetails v-else/>
  </q-page>
</template>

<script>
import users from 'components/users/index'
import userDetails from 'components/users/details'
export default {
  // name: 'PageName',
  components:{
    users, userDetails
  },

  async mounted() {
    await this.getUsers()
  },

  methods: {
    getUsers(){
      this.$store.dispatch('DataAuth/getUsers');
    }
  },

}
</script>
