<template>
  <v-app light>
    <v-navigation-drawer persistent v-model="drawer" enable-resize-watcher app>
      <nav-menu></nav-menu>
    </v-navigation-drawer>
    <tool-bar v-on:toggleDrawer="drawer = !drawer"></tool-bar>
    <main>
      <v-content>
        <v-container fluid>
          <child></child>
        </v-container>
      </v-content>
    </main>
    <error-dialog></error-dialog>
    <page-footer></page-footer>
  </v-app>
</template>

<script>
import NavMenu from '~/components/NavMenu'
import ToolBar from '~/components/ToolBar'
import ErrorDialog from '~/components/ErrorDialog'
import PageFooter from '~/components/PageFooter'

export default {
  components: {
    'nav-menu': NavMenu,
    'tool-bar': ToolBar,
    'error-dialog': ErrorDialog,
    'page-footer': PageFooter
  },
  data () {
    return {
      drawer: true
    }
  }
}
</script>
