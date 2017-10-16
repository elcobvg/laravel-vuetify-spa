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
    <error-dialog></error-dialog>
    <page-footer></page-footer>
  </v-app>
</template>

<script>
import NavDrawer from '~/components/NavDrawer'
import ToolBar from '~/components/ToolBar'
import ErrorDialog from '~/components/ErrorDialog'
import PageFooter from '~/components/PageFooter'

export default {
  components: {
    'nav-drawer': NavDrawer,
    'tool-bar': ToolBar,
    'error-dialog': ErrorDialog,
    'page-footer': PageFooter
  }
}
</script>
