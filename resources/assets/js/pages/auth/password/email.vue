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
        <form @submit.prevent="send" @keydown="form.onKeydown($event)">
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{ $t('reset_password') }}</h3>
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
            ></v-text-field>
            <has-error :form="form" field="email"></has-error>

            <v-alert 
              color="success" 
              v-model="form.successful" 
              dismissible>
              {{ status }}
            </v-alert>
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
    }
  }
}
</script>
