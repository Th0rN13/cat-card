<template lang="pug">
  main.section Edit

</template>

<script>
import Card from '~/components/card.vue'

export default {
  data () {
    return {
      cards: [
        {id: 1, heading: "Нямушка", content: "с фуа-гра", portions: "<b>10</b> порций", gift:"мышь в подарок", weight: "0.5", description: "Печень утки разварная с артишоками."},
        {id: 2, heading: "Хрямушка", content: "с рыбой", portions: "<b>40</b> порций", gift:"<b>2</b> мыши в подарок", weight: "2", description: "Головы щучьи с чесноком да свежайшая сёмгушка.", isActive: true},
        {id: 3, heading: "Жрямушка", content: "с курой", portions: "<b>100</b> порций", gift:"<b>5</b> мышей в подарок", additional: "заказчик доволен", weight: "5", description: "Филе из цыплят с трюфелями в бульоне.", isDisabled: true},
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="sass">
@import '~assets/_vars.sass'
</style>

