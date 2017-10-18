<template>
  <v-card>
    <v-card-title primary-title class="grey lighten-4">
      <h3 class="headline mb-0">{{ $t('home') }}</h3>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      {{ $t('you_are_logged_in') }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'home-view',
  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
