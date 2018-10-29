<template lang="pug">
  section.container
    div
      h1.title ТИТЛЕ!
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="sass">
.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
</style>

