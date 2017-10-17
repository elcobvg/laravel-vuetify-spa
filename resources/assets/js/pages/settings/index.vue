<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2 lg4 offset-lg4>
      <v-card>
        <v-progress-linear 
          :indeterminate="true" 
          height="4" 
          v-if="busy"
          color="accent"
        >
        </v-progress-linear>
        <v-card-title primary-title class="grey lighten-4">
          <h3 class="headline mb-0">{{ $t('settings') }}</h3>
        </v-card-title>
        <v-tabs icons centered fixed>
          <v-tabs-bar class="grey lighten-4">
            <v-tabs-slider color="primary"></v-tabs-slider>
            <v-tabs-item href="#tab-person">
              <v-icon>person</v-icon>
              {{ $t('profile') }}
            </v-tabs-item>
            <v-tabs-item href="#tab-password">
              <v-icon>lock</v-icon>
              {{ $t('password') }}
            </v-tabs-item>
          </v-tabs-bar>
          <v-divider></v-divider>

          <v-tabs-items>
            <v-tabs-content id="tab-person">
              <profile v-on:busy="busy = $event"></profile>
            </v-tabs-content>
            <v-tabs-content id="tab-password">
              <password v-on:busy="busy = $event"></password>
            </v-tabs-content>
          </v-tabs-items>
        </v-tabs>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Profile from '~/pages/settings/profile'
import Password from '~/pages/settings/password'

export default {
  components: {
    Profile,
    Password
  },
  data () {
    return {
      busy: false
    }
  }
}
</script>

