import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, { delay: 250 })

Vue.mixin({
  $_veeValidate: {
    validator: 'new'
  },
  methods: {
    async formHasErrors () {
      const valid = await this.$validator.validateAll()
      if (valid) {
        this.$validator.pause()
      }
      return !valid
    }
  }
})
