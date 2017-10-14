import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, { delay: 250 })

Vue.mixin({
  $_veeValidate: {
    validator: 'new'
  },
  methods: {
    async formHasErrors () {
      return !await this.$validator.validateAll()
    }
  }
})
