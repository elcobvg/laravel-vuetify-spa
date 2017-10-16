<template>
  <v-navigation-drawer
    persistent
    :value.sync="drawer"
    enable-resize-watcher
    app
  >
    <v-list>
      <v-list-tile
        value="true"
        v-for="(item, i) in items"
        :key="i"
        :to="item.route"
      >
        <v-list-tile-action>
          <v-icon light v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    drawer: 'drawer'
  }),

  data () {
    return {
      items: [
        { title: 'Dashboard', icon: 'dashboard', route: { name: 'home' } },
        { title: 'Account', icon: 'account_box', route: { name: 'settings.profile' } }
      ]
    }
  }
}
</script>
