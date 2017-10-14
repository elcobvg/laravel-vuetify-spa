<template>
  <v-card flat>
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <v-card-title primary-title>
        <h5 class="subheading mb-0">{{ $t('your_info') }}</h5>
      </v-card-title>
      <v-card-text>
        <v-alert 
          color="success" 
          icon="check_circle" 
          v-model="form.successful" 
          dismissible>
          {{ $t('info_updated') }}
        </v-alert>

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
      </v-card-text>
      <v-card-actions>
        <v-btn :loading="form.busy" :disabled="form.busy" type="submit">{{ $t('update') }}</v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    form: new Form({
      name: '',
      email: ''
    })
  }),

  computed: mapGetters({
    user: 'authUser'
  }),

  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
  },

  methods: {
    async update () {
      if (await this.formHasErrors()) return

      const { data } = await this.form.patch('/api/settings/profile')

      this.$store.dispatch('updateUser', { user: data })
    }
  }
}
</script>
