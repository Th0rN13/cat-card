<template lang="pug">
  main.section
    .container.cat-food
      h1 Ты сегодня покормил кота?
      .card-set
        card(v-for="card in cards"
        :heading="card.heading"
        :content="card.content"
        :portions="card.portions"
        :gift="card.gift"
        :weight="card.weight"
        :description="card.description"
        :additional="card.additional"
        :initActive="card.isActive"
        :initDisabled="card.isDisabled"
        :key="card.id")
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
.section
  width: 100vw
  min-height: 80vh
  background-color: #ecf0f1
  display: flex
  justify-content: center
  align-items: center

.container
  min-height: 80%

.cat-food
  background: url("~assets/img/bg.png") center center
  color: #ffffff
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  overflow: hidden
  h1
    text-align: center
    font-size: 36px
    font-family: "Exo 2.0 - Thin"
    margin: 47px 0 23px
  .card-set
    width: 100%
    padding: 20px 0
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-around
    align-content: center
</style>

