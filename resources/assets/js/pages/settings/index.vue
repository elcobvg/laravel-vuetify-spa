<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2 lg4 offset-lg4>
      <v-card>
        <progress-bar :show="busy"></progress-bar>
        <v-card-title primary-title class="grey lighten-4">
          <h3 class="headline mb-0">{{ $t('settings') }}</h3>
        </v-card-title>
        <v-divider></v-divider>

        <v-tabs icons-and-text centered fixed>
          <v-tabs-slider color="primary"></v-tabs-slider>

          <v-tab href="#tab-person">
            {{ $t('profile') }}
            <v-icon>person</v-icon>
          </v-tab>
          <v-tab href="#tab-password">
            {{ $t('password') }}
            <v-icon>lock</v-icon>
          </v-tab>

          <v-tab-item id="tab-person">
            <profile-view v-on:busy="busy = $event"></profile-view>
          </v-tab-item>
          <v-tab-item id="tab-password">
            <password-view v-on:busy="busy = $event"></password-view>
          </v-tab-item>

        </v-tabs>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Profile from '~/pages/settings/profile'
import Password from '~/pages/settings/password'

export default {
  name: 'settings-view',
  components: {
    'profile-view': Profile,
    'password-view': Password
  },
  data () {
    return {
      busy: false
    }
  }
}
</script>
