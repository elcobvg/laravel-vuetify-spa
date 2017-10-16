<template>
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
</template>

<script>
export default {
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
