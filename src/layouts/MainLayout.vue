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
        // {
        //   title: 'Docs',
        //   caption: 'quasar.dev',
        //   icon: 'school',
        //   link: 'https://quasar.dev'
        // },
        // {
        //   title: 'Github',
        //   caption: 'github.com/quasarframework',
        //   icon: 'code',
        //   link: 'https://github.com/quasarframework'
        // },
        // {
        //   title: 'Discord Chat Channel',
        //   caption: 'chat.quasar.dev',
        //   icon: 'chat',
        //   link: 'https://chat.quasar.dev'
        // },
        // {
        //   title: 'Forum',
        //   caption: 'forum.quasar.dev',
        //   icon: 'record_voice_over',
        //   link: 'https://forum.quasar.dev'
        // },
        // {
        //   title: 'Twitter',
        //   caption: '@quasarframework',
        //   icon: 'rss_feed',
        //   link: 'https://twitter.quasar.dev'
        // },
        // {
        //   title: 'Facebook',
        //   caption: '@QuasarFramework',
        //   icon: 'public',
        //   link: 'https://facebook.quasar.dev'
        // },
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
