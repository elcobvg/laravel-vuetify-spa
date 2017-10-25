<template>
  <div>
    <v-toolbar>
      <v-spacer></v-spacer>
      <!-- <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon> -->
      <v-toolbar-items>
        <v-btn flat v-if="authenticated" :to="{ name: 'home' }">{{ $t('home') }}</v-btn>
        <template v-else>
          <v-btn flat :to="{ name: 'login' }">{{ $t('login') }}</v-btn>
          <v-btn flat :to="{ name: 'register' }">{{ $t('register') }}</v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-layout column align-center>
            <div class="display-3 grey--text mt-5">
              {{ title }}
            </div>
            <div class="body-2 my-3">
              <a href="https://laravel.com/docs">Documentation</a>
              <a href="https://laracasts.com">Laracasts</a>
              <a href="https://laravel-news.com">News</a>
              <a href="https://forge.laravel.com">Forge</a>
              <a href="https://github.com/laravel/laravel">GitHub</a>
            </div>
            <img src="/img/v.png" alt="Vuetify.js" class="mt-5">
            <div class="display-2 grey--text mt-5">
              Vuetify
            </div>
            <div class="body-2 my-3">
              <a href="https://vuetifyjs.com">Documentation</a>
              <a href="https://github.com/vuetifyjs/vuetify">GitHub</a>
            </div>
          </v-layout>
        </v-container>
      </v-content>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'welcome-view',
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },

  computed: mapGetters({
    authenticated: 'authCheck'
  }),

  data: () => ({
    title: window.config.appName
  })
}
</script>
