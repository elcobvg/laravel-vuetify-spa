<template>
  <v-card>
    <v-card-title primary-title>
    <h3 class="headline mb-0">{{ $t('home') }}</h3>
    </v-card-title>
    <v-card-text>
      {{ $t('you_are_logged_in') }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
