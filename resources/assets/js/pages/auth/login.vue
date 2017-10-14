<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2 lg4 offset-lg4>
      <v-card>
        <v-progress-linear 
          :indeterminate="true" 
          height="4" 
          v-if="form.busy"
          color="accent"
        >
        </v-progress-linear>
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{ $t('login') }}</h3>
          </v-card-title>
          <v-card-text>

            <!-- Email -->
            <v-text-field
              name="email"
              type="email"
              v-model="form.email"
              :label="$t('email')"
              :error-messages="errors.collect('email')"
              v-validate="'required|email'"
              :class="{ 'input-group--error error--text': form.errors.has('email') }"
              prepend-icon="person_outline"
            ></v-text-field>
            <has-error :form="form" field="email"></has-error>

            <!-- Password -->
            <v-text-field
              name="password"
              v-model="form.password"
              type="password"
              :label="$t('password')"
              :error-messages="errors.collect('password')"
              v-validate="'required|min:8'"
              :class="{ 'input-group--error error--text': form.errors.has('password') }"
              prepend-icon="lock_outline"
            ></v-text-field>
            <has-error :form="form" field="password"></has-error>

            <!-- Remember Me -->
            <v-checkbox
              color="primary"
              v-model="remember"
              value="true"
              :label="$t('remember_me')"
              type="checkbox"
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
  metaInfo () {
    return { title: this.$t('login') }
  },
  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
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
