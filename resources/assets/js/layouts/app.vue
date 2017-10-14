<template>
  <v-app light>
    <navdrawer></navdrawer>
    <navbar></navbar>
    <main>
      <v-content>
        <v-container fluid>
          <child></child>
        </v-container>
      </v-content>
    </main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

import Navbar from '~/components/Navbar'
import Navdrawer from '~/components/Navdrawer'

export default {
  name: 'app-layout',

  components: {
    Navbar,
    Navdrawer
  }
}
</script>

