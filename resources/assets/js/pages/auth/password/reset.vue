<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2 lg4 offset-lg4>
      <v-card>
        <v-progress-linear 
          :indeterminate="true" 
          color="accent"
          height="4" 
          v-if="form.busy"
        >
        </v-progress-linear>
        <form @submit.prevent="reset" @keydown="form.onKeydown($event)">
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{ $t('reset_password') }}</h3>
          </v-card-title>
          <v-card-text>

            <!-- Email -->
            <v-text-field
              :class="{ 'input-group--error error--text': form.errors.has('email') }"
              :error-messages="errors.collect('email')"
              :label="$t('email')"
              name="email"
              type="email"
              v-model="form.email"
              v-on:focus="initForm"
              v-validate="'required|email'"
            ></v-text-field>
            <has-error :form="form" field="email"></has-error>

            <!-- Password -->
            <v-text-field
              :append-icon-cb="function () { eye = !eye }"
              :append-icon="eye ? 'visibility' : 'visibility_off'"
              :class="{ 'input-group--error error--text': form.errors.has('password') }"
              :error-messages="errors.collect('password')"
              :hint="$t('password_length_hint')"
              :label="$t('password')"
              :type="eye ? 'password' : 'text'"
              name="password"
              v-model="form.password"
              v-validate="'required|min:8'"
            ></v-text-field>
            <has-error :form="form" field="password"></has-error>

            <!-- Password Confirmation -->
            <v-text-field
              :class="{ 'input-group--error error--text': form.errors.has('password_confirmation') }"
              :error-messages="errors.collect('password_confirmation')"
              :label="$t('confirm_password')"
              :type="eye ? 'password' : 'text'"
              data-vv-as="password"
              name="password_confirmation"
              v-model="form.password_confirmation"
              v-validate="'required|confirmed:password'"
            ></v-text-field>
            <has-error :form="form" field="password_confirmation"></has-error>

            <v-snackbar top v-model="form.successful" color="success">
              {{ status }}
              <v-btn dark flat @click.native="form.clear()">{{ $t('close') }}</v-btn>
            </v-snackbar>
          </v-card-text>

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
