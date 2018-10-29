<template lang="pug">
  div.nav
    nuxt-link.nav__link(to="/") Shop
    nuxt-link.nav__link(to="/edit") Edit
</template>

<style lang="sass">
  .nav
    height: 40px
    display: flex
    justify-content: center
    align-items: center
  .nav__link
    font-size: 20px
    font-weight: bold
    padding: 10px
    line-height: 20px
</style>

