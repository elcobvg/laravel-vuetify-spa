<template>
  <div>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            {{ name }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: this.$t('nav_menu_title'),
      items: [
        { title: 'Dashboard', icon: 'dashboard', route: { name: 'home' } },
        { title: 'Account', icon: 'account_box', route: { name: 'settings.profile' } }
      ]
    }
  }
}
</script>
