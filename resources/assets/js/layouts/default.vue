<template>
  <v-app light>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
    <feedback-message></feedback-message>
  </v-app>
</template>

<script>
import FeedbackMessage from '~/components/FeedbackMessage'

export default {
  name: 'default-layout',
  components: {
    'feedback-message': FeedbackMessage
  }
}
</script>
