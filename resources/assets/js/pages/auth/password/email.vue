<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2 lg4 offset-lg4>
      <v-card>
        <progress-bar :show="form.busy"></progress-bar>
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

          </v-card-text>
          <v-card-actions>
            <submit-button :flat="true" :form="form" :label="$t('send_password_reset_link')"></submit-button>
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
    form: new Form({
      email: ''
    })
  }),

  methods: {
    async send () {
      if (await this.formHasErrors()) return

      const { data } = await this.form.post('/api/password/email')

      this.$store.dispatch('responseMessage', {
        type: 'success',
        text: data.status
      })

      this.$router.push({ name: 'welcome' })
    }
  }
}
</script>
