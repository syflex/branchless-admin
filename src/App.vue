<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  preFetch({ store}) {
    store.dispatch('DataAuth/getUsers');
    store.dispatch('DataAuth/getBankTrans');
    store.dispatch('DataAuth/getWalletTrans');
  },
}
</script>
