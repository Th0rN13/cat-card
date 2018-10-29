<template lang="pug">
  div
    navigation
    nuxt
</template>

<script>
  import navigation from '~/components/nav.vue'
  export default {
    components: {
      navigation
    }
  }
</script>

<style lang="sass">
*
  padding: 0
  margin: 0
  box-sizing: border-box
  &:focus
    outline: none;

body
  font-family: "Trebuchet MS", Arial, sans-serif;
  display: flex
  flex-direction: column
  min-height: 500px
  height: 100%
  justify-content: space-between
  overflow-x: hidden

a
  text-decoration: none
  color: #3498db

.container
  margin-left: auto
  margin-right: auto

@media screen and (max-width:767px)
  .container
    width: 100%

@media screen and (min-width:768px)  and (max-width:991px)
  .container
    width: 720px

@media screen and (min-width:992px)  and (max-width:1199px)
  .container
    width: 960px

@media screen and (min-width:1200px)
  .container
    width: 1184px
</style>

