<template>
  <v-card flat>
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <v-card-title primary-title>
        <h5 class="subheading mb-0">{{ $t('your_password') }}</h5>
      </v-card-title>
      <v-card-text>

        <!-- Password -->
        <v-text-field
          name="password"
          v-model="form.password"
          type="password"
          :hint="$t('password_length_hint')"
          :label="$t('password')"
          :error-messages="errors.collect('password')"
          v-validate="'min:8'"
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
          v-validate="'confirmed:password'"
          data-vv-as="password"
          :class="{ 'input-group--error error--text': form.errors.has('password_confirmation') }"
        ></v-text-field>
        <has-error :form="form" field="password_confirmation"></has-error>   

        <v-alert 
          color="success" 
          v-model="form.successful" 
          transition="scale-transition"
          dismissible
        >
          {{ $t('password_updated') }}
        </v-alert>     
      </v-card-text>
      <v-card-actions>
        <v-btn 
          :loading="form.busy" 
          :disabled="form.busy" 
          type="submit"
          @click="$emit('busy', true)"
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
    })
  }),

  methods: {
    async update () {
      if (await this.formHasErrors()) return

      await this.form.patch('/api/settings/password')

      this.form.reset()
      this.$emit('busy', false)
    }
  }
}
</script>
