<template>
  <v-card flat>
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <v-card-title primary-title>
        <h5 class="subheading mb-0">{{ $t('your_info') }}</h5>
      </v-card-title>
      <v-card-text>

        <!-- Name -->
        <text-input
          :form="form"
          :label="$t('name')"
          :v-errors="errors"
          :value.sync="form.name"
          counter="30"
          name="name"
          v-validate="'required|max:30'"
        ></text-input>

        <!-- Email -->
        <email-input
          :form="form"
          :label="$t('email')"
          :v-errors="errors"
          :value.sync="form.email"
          name="email"
          v-validate="'required|email'"
        ></email-input>

        <form-feedback :form="form" :text="$t('info_updated')"></form-feedback>

      </v-card-text>
      <v-card-actions>
        <v-btn :disabled="form.busy" :loading="form.busy" type="submit">
          {{ $t('update') }}
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
  name: 'profile-view',
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

      this.$emit('busy', true)

      const { data } = await this.form.patch('/api/settings/profile')

      await this.$store.dispatch('updateUser', { user: data })
      this.$emit('busy', false)
    }
  },

  watch: {
    form () {
      console.log(this.form)
    }
  }
}
</script>

