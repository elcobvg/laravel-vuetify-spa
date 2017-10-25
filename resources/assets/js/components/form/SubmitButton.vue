<template>
  <v-btn v-if="block" block :loading="form.busy" :disabled="form.busy" type="submit">
    {{ label }}
  </v-btn>
  <v-btn v-else-if="flat" flat :color="color" :loading="form.busy" :disabled="form.busy" type="submit">
    {{ label }}
  </v-btn>
  <v-btn v-else :loading="form.busy" :disabled="form.busy" type="submit">
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  name: 'submit-button',
  props: {
    form: {
      type: Object,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    flat: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
