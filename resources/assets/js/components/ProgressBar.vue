<template>
  <v-progress-linear 
    :indeterminate="true" 
    :color="color"
    height="4" 
    v-if="show"
  >
  </v-progress-linear>
</template>

<script>
export default {
  name: 'progress-bar',
  props: {
    show: {
      type: [Boolean, String],
      required: true
    },
    color: {
      type: String,
      default: 'accent'
    }
  }
}
</script>

<style lang="stylus" scoped>
.progress-linear
  height: 4px
  left: 0
  margin: 0
  position: absolute
  right: 0
  top: 0
  width: 100%
  z-index: 999999
</style>
