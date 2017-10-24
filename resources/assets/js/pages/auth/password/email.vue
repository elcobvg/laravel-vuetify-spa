<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2 lg4 offset-lg4>
      <v-card>
        <form-progress :show="form.busy"></form-progress>
        <form @submit.prevent="send" @keydown="form.onKeydown($event)">
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{ $t('reset_password') }}</h3>
          </v-card-title>
          <v-card-text>

            <!-- Email -->
            <email-input
              :form="form"
              :label="$t('email')"
              :v-errors="errors"
              :value.sync="form.email"
              name="email"
              v-validate="'required|email'"
            ></email-input>

            <form-feedback :form="form" :text="status"></form-feedback>

          </v-card-text>
          <v-card-actions>
            <v-btn :loading="form.busy" :disabled="form.busy" type="submit">
              {{ $t('send_password_reset_link') }}
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Form from 'vform'

export default {
  name: 'email-view',
  
  metaInfo () {
    return { title: this.$t('reset_password') }
  },

  data: () => ({
    status: '',
    form: new Form({
      email: ''
    })
  }),

  methods: {
    async send () {
      if (await this.formHasErrors()) return

      const { data } = await this.form.post('/api/password/email')

      this.status = data.status

      this.form.reset()
    },
    initForm () {
      this.$validator.resume()
      this.form.clear()
    }
  }
}
</script>
