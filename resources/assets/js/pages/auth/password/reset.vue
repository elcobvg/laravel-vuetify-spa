<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2 lg4 offset-lg4>
      <v-card>
        <form-progress :show="form.busy"></form-progress>
        <form @submit.prevent="reset" @keydown="form.onKeydown($event)">
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

            <!-- Password -->
            <password-input
              :form="form"
              :hint="$t('password_length_hint')"
              :v-errors="errors"
              :value.sync="form.password"
              v-on:eye="eye = $event"
              v-validate="'required|min:8'"
            ></password-input>

            <!-- Password Confirmation -->
            <password-input
              :form="form"
              :hide="eye"
              :label="$t('confirm_password')"
              :v-errors="errors"
              :value.sync="form.password_confirmation"
              data-vv-as="password"
              hide-icon="true"
              name="password_confirmation"
              v-validate="'required|confirmed:password'"
            ></password-input>

            <form-feedback :form="form" :text="status"></form-feedback>
            
          </v-card-text>
          <v-card-actions>
            <v-btn :loading="form.busy" :disabled="form.busy" type="submit">
              {{ $t('reset_password') }}
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
  name: 'reset-view',
  
  metaInfo () {
    return { title: this.$t('reset_password') }
  },
  
  data: () => ({
    status: '',
    form: new Form({
      token: '',
      email: '',
      password: '',
      password_confirmation: ''
    }),
    eye: true
  }),

  methods: {
    async reset () {
      if (await this.formHasErrors()) return

      this.form.token = this.$route.params.token

      const { data } = await this.form.post('/api/password/reset')

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
