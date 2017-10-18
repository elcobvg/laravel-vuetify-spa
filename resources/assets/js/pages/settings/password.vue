<template>
  <v-card flat>
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <v-card-title primary-title>
        <h5 class="subheading mb-0">{{ $t('your_password') }}</h5>
      </v-card-title>
      <v-card-text>

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
          v-validate="'confirmed:password'"
        ></v-text-field>
        <has-error :form="form" field="password_confirmation"></has-error>   

        <v-snackbar top v-model="form.successful" color="success">
          {{ $t('password_updated') }}
          <v-btn dark flat @click.native="form.clear()">{{ $t('close') }}</v-btn>
        </v-snackbar> 
      </v-card-text>
      <v-card-actions>
        <v-btn 
          :disabled="form.busy" 
          :loading="form.busy" 
          type="submit"
        >
          {{ $t('update') }}
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
import Form from 'vform'

export default {
  name: 'password-view',
  data: () => ({
    form: new Form({
      password: '',
      password_confirmation: ''
    }),
    eye: true
  }),

  methods: {
    async update () {
      if (await this.formHasErrors()) return

      this.$emit('busy', true)

      await this.form.patch('/api/settings/password')

      this.form.reset()
      this.$emit('busy', false)
    }
  }
}
</script>
