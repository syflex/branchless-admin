<template>
  <q-page padding>
    <!-- content -->
    <users v-if="$route.name == 'users'"/>
    <details v-else/>
  </q-page>
</template>

<script>
import users from 'components/users/index'
import details from 'components/users/details'
export default {
  // name: 'PageName',
  components:{
    users, details
  }
}
</script>
