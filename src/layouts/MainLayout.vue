<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header class="bg-secondary" v-if="theroute != 'login'">
      <div class="header-bar"/>
      <q-toolbar>
        <q-toolbar-title>
         <div class="">
            <img src="statics/branchlessLogoWhite.png" style="max-width: 150px">
          </div>
        </q-toolbar-title>

        <q-tabs stretch inline-label active-color="primary" v-if="$q.screen.gt.sm">
          <q-route-tab no-caps icon="ion-ios-home" label="Home" to="/analytics" exact disable />
          <q-route-tab no-caps icon="ion-ios-people" label="Users" :to="{name: 'users'}" exact />
          <q-route-tab no-caps icon="account_balance" label="Bank Transactions" :to="{name: 'bank-transaction'}" exact />
          <q-route-tab no-caps icon="fa fa-chart-line" label="Wallet Transactions" :to="{name: 'wallet-transaction'}" exact />
          <q-route-tab no-caps icon="fa fa-chart-line" label="Wallet Total" :to="{name: 'wallet-total'}" exact />
          <q-route-tab no-caps icon="fa fa-chart-line" label="Savings" :to="{name: 'savings'}" exact />
          <q-route-tab no-caps icon="fa fa-chart-line" label="Plans" :to="{name: 'plans'}" exact />
          <!-- <q-route-tab no-caps icon="fa fa-chart-bar" label="Chart" to="#" exact disable />
          <q-route-tab no-caps icon="fa fa-cogs" label="Settings" to="#" exact disable /> -->
        </q-tabs>


        <q-btn dense flat round icon="menu" @click="left = !left" class="lt-md"/>
      </q-toolbar>
      <q-separator color="teal-10"/>
    </q-header>

    <q-drawer v-model="left" bordered >

      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <!-- <q-drawer width="250px"
      v-model="left"
      show-if-above
      bordered
      content-class="bg-grey-1"
      v-if="theroute != 'login'"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          <img src="statics/branchlessLogo.png" style="max-width: 200px">
        </q-item-label>
        <EssentialLink
          v-for="link in leftBar"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

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
      leftDrawerOpen:false,
      essentialLinks: [
        {
          title: 'Home',
          icon: 'home',
          link: '/analytics',
          disable: true
        },
        {
          title: 'Users',
          icon: 'ion-ios-people',
          link: 'users',
          disable: false
        },
        {
          title: 'Bank Transactions',
          icon: 'account_balance',
          link: 'bank-transaction',
          disable: false
        },
        {
          title: 'Wallet Transaction',
          icon: 'fa fa-chart-line',
          link: 'wallet-transaction',
          disable: false
        },
        {
          title: 'Wallet Total',
          icon: 'fa fa-chart-line',
          link: 'wallet-total',
          disable: false
        },
        {
          title: 'Savings',
          icon: 'fa fa-chart-line',
          link: 'savings',
          disable: false
        },
        {
          title: 'Plans',
          icon: 'fa fa-chart-line',
          link: 'plans',
          disable: false
        },
        {
          title: 'Chart',
          icon: 'fa fa-chart-bar',
          link: '#',
          disable: true
        },
        {
          title: 'settings',
          icon: 'fa fa-cogs',
          link: '#',
          disable: true
        },
        {
          title: 'CMS',
          icon: 'ion-create',
          link: '/cms',
          disable: true
        },
      ],
      leftBar: [
        {
          title: 'CMS',
          icon: 'ion-create',
          link: 'cms',
          disable: false
        },
        {
          title: 'Analytics',
          icon: 'ion-pulse',
          link: '/analytics',
          disable: false
        },
      ]
    }
  },
  computed: {
    theroute(){return this.$route.name}
  },
}
</script>
