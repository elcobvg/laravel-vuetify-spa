<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2 lg4 offset-lg4>
      <v-card>
        <progress-bar :show="form.busy"></progress-bar>
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
            
          </v-card-text>
          <v-card-actions>
            <submit-button :flat="true" :form="form" :label="$t('reset_password')"></submit-button>
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

      const response = await this.form.post('/api/password/reset')

      // Login user if reset successful.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('saveToken', {
        token: data.token,
        remember: false
      })

      // Fetch the user.
      await this.$store.dispatch('fetchUser')

      this.$store.dispatch('responseMessage', {
        type: 'success',
        text: response.data.status
      })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
