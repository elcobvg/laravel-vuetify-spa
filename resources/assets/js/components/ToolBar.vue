<template>
  <v-toolbar fixed app dark color="primary">
    <v-toolbar-side-icon @click.stop="toggleDrawer" v-if="authenticated"></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link :to="{ name: 'welcome' }" class="white--text">
        {{ appName }}
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- Authenticated -->
    <template v-if="authenticated">
      <progress-bar :show="busy"></progress-bar>
      <v-btn flat :to="{ name: 'settings.profile' }">{{ user.name }}</v-btn>
      <v-btn flat @click.prevent="logout">{{ $t('logout') }}</v-btn>
    </template>

    <!-- Guest -->
    <template v-else>
      <v-btn flat :to="{ name: 'login' }">{{ $t('login') }}</v-btn>
      <v-btn flat :to="{ name: 'register' }">{{ $t('register') }}</v-btn>
    </template>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
    appName: window.config.appName,
    busy: false
  }),

  computed: mapGetters({
    user: 'authUser',
    authenticated: 'authCheck'
  }),

  methods: {
    toggleDrawer () {
      this.$emit('toggleDrawer')
    },
    async logout () {
      this.busy = true

      if (this.drawer) {
        this.toggleDrawer()
      }

      // Log out the user.
      await this.$store.dispatch('logout')
      this.busy = false

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="stylus" scoped>

.toolbar__title .router-link-active
  text-decoration: none

</style>
