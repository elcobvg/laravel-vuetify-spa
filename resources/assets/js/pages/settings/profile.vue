<template>
  <v-card flat>
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <v-card-title primary-title>
        <h5 class="subheading mb-0">{{ $t('your_info') }}</h5>
      </v-card-title>
      <v-card-text>

        <!-- Name -->
        <v-text-field
          :class="{ 'input-group--error error--text': form.errors.has('name') }"
          :error-messages="errors.collect('name')"
          :label="$t('name')"
          name="name"
          v-model="form.name"
          v-validate="'required|max:30'"
        ></v-text-field>
        <has-error :form="form" field="name"></has-error>

        <!-- Email -->
        <v-text-field
          :class="{ 'input-group--error error--text': form.errors.has('email') }"
          :error-messages="errors.collect('email')"
          :label="$t('email')"
          name="email"
          type="email"
          v-model="form.email"
          v-validate="'required|email'"
        ></v-text-field>
        <has-error :form="form" field="email"></has-error>     

        <v-snackbar top v-model="form.successful" color="success">
          {{ $t('info_updated') }}
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
import { mapGetters } from 'vuex'

export default {
  name: 'profile-view',
  data: () => ({
    form: new Form({
      name: '',
      email: ''
    }),
    snackbar: true
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

