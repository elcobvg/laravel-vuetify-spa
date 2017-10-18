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
        <form @submit.prevent="register" @keydown="form.onKeydown($event)">
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{ $t('register') }}</h3>
          </v-card-title>
          <v-card-text>

            <!-- Name -->
            <v-text-field
              name="name"
              v-model="form.name"
              :label="$t('name')"
              :error-messages="errors.collect('name')"
              v-validate="'required|max:30'"
              :class="{ 'input-group--error error--text': form.errors.has('name') }"
            ></v-text-field>
            <has-error :form="form" field="name"></has-error>

            <!-- Email -->
            <v-text-field
              name="email"
              type="email"
              v-model="form.email"
              :label="$t('email')"
              :error-messages="errors.collect('email')"
              v-validate="'required|email'"
              :class="{ 'input-group--error error--text': form.errors.has('email') }"
            ></v-text-field>
            <has-error :form="form" field="email"></has-error>

            <!-- Password -->
            <v-text-field
              name="password"
              v-model="form.password"
              type="password"
              :hint="$t('password_length_hint')"
              :label="$t('password')"
              :error-messages="errors.collect('password')"
              v-validate="'required|min:8'"
              :class="{ 'input-group--error error--text': form.errors.has('password') }"
            ></v-text-field>
            <has-error :form="form" field="password"></has-error>

            <!-- Password Confirmation -->
            <v-text-field
              name="password_confirmation"
              type="password"
              v-model="form.password_confirmation"
              :label="$t('confirm_password')"
              :error-messages="errors.collect('password_confirmation')"
              v-validate="'required|confirmed:password'"
              data-vv-as="password"
              :class="{ 'input-group--error error--text': form.errors.has('password_confirmation') }"
            ></v-text-field>
            <has-error :form="form" field="password_confirmation"></has-error>
          </v-card-text>

          <v-card-actions>
            <v-btn :loading="form.busy" :disabled="form.busy" type="submit">{{ $t('register') }}</v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
import Form from 'vform'

export default {
  name: 'register-view',
  metaInfo () {
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),

  methods: {
    async register () {
      if (await this.formHasErrors()) return

      // Register the user.
      const { data } = await this.form.post('/api/register')

      // Log in the user.
      const { data: { token }} = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('saveToken', { token })

      // Update the user.
      await this.$store.dispatch('updateUser', { user: data })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
