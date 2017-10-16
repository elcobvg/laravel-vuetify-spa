<template>
  <v-layout row justify-center>
    <v-dialog :value.sync="responseError.type" persistent>
      <v-card>
        <v-card-title class="headline" :class="responseError.type">{{ responseError.title }}</v-card-title>
        <v-card-text>{{ responseError.text }}</v-card-text>
        <v-layout row justify-center>
          <v-btn :color="responseError.type" flat="flat" @click.native="close">{{ $t('ok') }}</v-btn>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    responseError: 'responseError'
  }),
  methods: {
    close () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
