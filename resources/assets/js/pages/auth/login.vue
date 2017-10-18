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
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{ $t('login') }}</h3>
          </v-card-title>
          <v-card-text>

            <!-- Email -->
            <v-text-field
              :class="{ 'input-group--error error--text': form.errors.has('email') }"
              :error-messages="errors.collect('email')"
              :label="$t('email')"
              name="email"
              prepend-icon="person_outline"
              type="email"
              v-model="form.email"
              v-validate="'required|email'"
            ></v-text-field>
            <has-error :form="form" field="email"></has-error>

            <!-- Password -->
            <v-text-field
              :append-icon-cb="function () { eye = !eye }"
              :append-icon="eye ? 'visibility' : 'visibility_off'"
              :class="{ 'input-group--error error--text': form.errors.has('password') }"
              :error-messages="errors.collect('password')"
              :label="$t('password')"
              :type="eye ? 'password' : 'text'"
              name="password"
              prepend-icon="lock_outline"
              v-model="form.password"
              v-validate="'required|min:8'"
            ></v-text-field>
            <has-error :form="form" field="password"></has-error>

            <!-- Remember Me -->
            <v-checkbox
              :label="$t('remember_me')"
              color="primary"
              type="checkbox"
              v-model="remember"
              value="true"
            ></v-checkbox>

            <v-btn block :loading="form.busy" :disabled="form.busy" type="submit">{{ $t('login') }}</v-btn>

          </v-card-text>
          <v-card-actions>
            <router-link :to="{ name: 'register' }">
              {{ $t('register') }}
            </router-link>
            <v-spacer></v-spacer>
            <router-link :to="{ name: 'password.request' }">
              {{ $t('forgot_password') }}
            </router-link>
          </v-card-actions>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Form from 'vform'

export default {
  name: 'login-view',
  metaInfo () {
    return { title: this.$t('login') }
  },
  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    eye: true,
    remember: false
  }),

  methods: {
    async login () {
      if (await this.formHasErrors()) return

      // Submit the form.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('fetchUser')

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
