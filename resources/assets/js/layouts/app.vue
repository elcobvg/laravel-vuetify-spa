<template>
  <v-app light>
    <nav-drawer></nav-drawer>
    <tool-bar></tool-bar>
    <main>
      <v-content>
        <v-container fluid>
          <child></child>
        </v-container>
      </v-content>
    </main>
    <page-footer></page-footer>
  </v-app>
</template>

<script>
import NavDrawer from '~/components/NavDrawer'
import ToolBar from '~/components/ToolBar'
import PageFooter from '~/components/PageFooter'

export default {
  components: {
    'nav-drawer': NavDrawer,
    'tool-bar': ToolBar,
    'page-footer': PageFooter
  }
}
</script>
