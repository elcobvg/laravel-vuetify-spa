<template>
  <div>
    <v-text-field
      @click:append="toggleVisibility"
      browser-autocomplete="current-password"
      :append-icon="icon"
      :class="errorClass"
      :counter="counter"
      :error-messages="errorMessages"
      :hint="hint"
      :label="label"
      :name="name"
      :prepend-icon="prepend"
      :type="_eye ? 'password' : 'text'"
      v-model="_value"
    ></v-text-field>
    <has-error :form="form" :field="name"></has-error>
  </div>
</template>

<script>
import i18n from '~/plugins/vue-i18n'
import TextInput from './TextInput'

export default {
  extends: TextInput,
  name: 'password-input',

  props: {
    name: {
      type: String,
      default: 'password'
    },
    label: {
      type: String,
      default: i18n.t('password')
    },
    hideIcon: {
      type: [Boolean, String],
      default: false
    },
    hide: {
      default: null
    }
  },

  computed: {
    icon () {
      if (this.hideIcon) {
        return ''
      } else if (this.eye) {
        return 'visibility'
      }
      return 'visibility_off'
    },
    _eye () {
      if (this.hide !== null) {
        return this.hide
      }
      return this.eye
    }
  },

  data () {
    return {
      eye: true
    }
  },

  methods: {
    toggleVisibility () {
      this.eye = !this.eye
      this.$emit('eye', this.eye)
    }
  },

  watch: {
    eye () {
      this.$emit('eye', this.eye)
    }
  }
}
</script>
