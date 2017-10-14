<template>
  <v-navigation-drawer app v-show="show"></v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    drawer: Boolean
  },

  computed: {
    ...mapGetters({
      authenticated: 'authCheck'
    }),
    show () {
      return this.drawer && this.authenticated
    }
  }
}
</script>

