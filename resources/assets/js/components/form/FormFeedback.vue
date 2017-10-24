<template>
  <v-snackbar top v-model="form.successful" color="success">
    {{ text }}
    <v-btn dark flat @click.native="form.clear()">{{ $t('close') }}</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'form-feedback',
  props: {
    form: {
      type: Object,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.snack__content
  max-width: 100vw
  min-width: 100vw
</style>
