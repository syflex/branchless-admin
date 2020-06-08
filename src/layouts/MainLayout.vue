<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header class="bg-secondary">
      <div class="header-bar"/>
      <q-toolbar>
        <q-toolbar-title>
         Branchless
        </q-toolbar-title>


        <q-tabs stretch inline-label active-color="primary">
          <q-route-tab no-caps icon="fa fa-chart-line" label="Users" to="/" exact />
           <q-route-tab no-caps icon="fa fa-chart-line" label="Bank Transactions" to="/" exact />
            <q-route-tab no-caps icon="fa fa-chart-line" label="Wallet Transactions" to="/" exact />
          <q-route-tab no-caps icon="fa fa-chart-bar" label="Chart" to="/" exact />
          <q-route-tab no-caps icon="fa fa-cogs" label="Settings" to="/" exact />
        </q-tabs>


        <q-btn dense flat round icon="menu" @click="left = !left" class="lt-sm"/>
      </q-toolbar>
      <q-separator color="teal-10"/>
    </q-header>

    <q-drawer v-model="left" side="left" overlay behavior="mobile" elevated>
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      left: false,
      essentialLinks: [
        {
          title: 'Home',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Users',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Bank Transactions',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Wallet Transaction',
          icon: 'record_voice_over',
          link: '/'
        },
        {
          title: 'Chart',
          icon: 'home',
          link: '/'
        },
        {
          title: 'settings',
          icon: 'home',
          link: '/'
        },
        // {
        //   title: 'Quasar Awesome',
        //   caption: 'Community Quasar projects',
        //   icon: 'favorite',
        //   link: 'https://awesome.quasar.dev'
        // }
      ]
    }
  }
}
</script>
