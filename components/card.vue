<template lang="pug">
  .card-one(:class="{'active': isActive , 'disabled': isDisabled }")
    .card(@click="swapActive")
      .card-title Сказочное заморское яство
      .card-block
        .description
          h2 {{heading}}
            small {{content}}
          div(v-html="portions")
          div(v-html="gift")
          div {{additional}}
        .weight {{weight}}
          small кг
        .backimage
    .card-text-mq Кот слишком жирный
      br
      | А экран мелкий
    .card-text(v-if="isActive") {{description}}
    .card-text.disabled(v-else-if="isDisabled") Печалька, {{content}} закончился.
    .card-text(v-else) Чего сидишь? Порадуй котэ,
      a(href="#") купи
      |.
</template>

<script>
  export default {
    props: {
      'heading':      String,
      'content':      String,
      'portions':     String,
      'gift':         String,
      'weight':       String,
      'description':  String,
      'additional':   String,
      'initDisabled': Boolean,
      'initActive':   Boolean,
    },
    data() {
      return {
        isActive: this.initActive,
        isDisabled: this.initDisabled,
      }
    },
    methods: {
      swapActive() {
        if(!this.isDisabled) {
          this.isActive = !this.isActive;
        }
        this.$store.commit('increment');
      }
    }
  }
</script>

<style lang="sass">
@import '~assets/_vars.sass'
.card-one.active
  .card
    transform: perspective(1000px) rotateY(360deg)
    &-title
      border-top: $border-width solid $active-color
      border-right: $border-width solid $active-color
      &::after
        border-bottom: $angle-size solid $active-color
    &-block
      border: $border-width solid $active-color
      border-top: none
      .weight
        background-color: $active-color
.card-one.active:hover
  .card
    &-title
      border-top: $border-width solid $active-hover-color
      border-right: $border-width solid $active-hover-color
      &::after
        border-bottom: $angle-size solid $active-hover-color
    &-block
      border: $border-width solid $active-hover-color
      border-top: none
      .weight
        background-color: $active-hover-color
.card-one:hover
  .card
    &-title
      border-top: $border-width solid $default-hover-color
      border-right: $border-width solid $default-hover-color
      &::after
        border-bottom: $angle-size solid $default-hover-color
    &-block
      border: $border-width solid $default-hover-color
      border-top: none
      .weight
        background-color: $default-hover-color
.card-one.disabled
  .card
    transform: perspective(1000px) rotateX(360deg)
    &-title
      color: rgba($semilight-color, 0.5)
      border-top: $border-width solid #b3b3b3
      border-right: $border-width solid #b3b3b3
      &::after
        border-bottom: $angle-size solid #b3b3b3
    &-block
      border: $border-width solid #b3b3b3
      border-top: none
      .weight
        background-color: #b3b3b3
      .description
        color: rgba($semilight-color, 0.5)
        h2
          color: rgba($dark-color, 0.5)
      .backimage
        opacity: 0.5
.card-one
  display: flex
  margin: 20px
  flex-direction: column
  justify-items: center
  align-items: center
  min-width: 25%
  .card
    transition: transform 0.2s
    perspective: 1000px
    position: relative
    width: 320px
    height: 480px
    border-radius: 12px
    text-align: left
    &-title
      color: $semilight-color
      margin-left: $angle-size
      height: $angle-size
      background-color: $light-color
      border-top: $border-width solid $default-color
      border-right: $border-width solid $default-color
      border-top-right-radius: $border-radius
      padding-left: 4px
      padding-top: 20px
      &::after
        border-bottom: $angle-size solid $default-color
        border-left: $angle-size solid transparent
        top: 0
        position: absolute
        left: 0
        content: ''
        z-index: 1
      &::before
        border-bottom: #{$angle-size - $border-width} solid $light-color
        border-left: #{$angle-size - $border-width} solid transparent
        top: $border-width
        position: absolute
        left: $border-width
        content: ''
        z-index: 2
    &-block
      background-color: $light-color
      color: $dark-color
      height: calc(100% - #{$angle-size})
      border: $border-width solid $default-color
      border-top: none
      border-bottom-left-radius: $border-radius
      border-bottom-right-radius: $border-radius
      display: flex
      position: relative
      flex-direction: column
      justify-content: space-between
      .description
        padding-left: 48px
        padding-top: 16px
        color: $semilight-color
        p
          font-size: 14px
          line-height: 16px
        h2
          color: $dark-color
          padding-top: 11px
          font-size: 48px
          font-weight: 700
          small
            display: block
            font-size: 24px
      .weight
        margin: 15px
        padding-top: 10px
        display: flex
        align-self: flex-end
        flex-direction: column
        align-items: center
        justify-content: center
        color: #ffffff
        font-size: 42px
        font-weight: 400
        line-height: 22px
        background-color: $default-color
        border-radius: 50%
        width: 80px
        height: 80px
        z-index: 2
        small
          display: block
          font-size: 21px
      .backimage
        position: absolute
        display: block
        width: 100%
        height: 100%
        background-color: transparent
        background-image: url("~assets/img/cat.png")
        background-repeat: no-repeat
        background-position: center bottom

  .card-text
    padding-top: 16px
    text-shadow: 0 1px 0 #000000
    color: $light-color
    font-size: 13px
    line-height: 16px
    a
      color: #1698d9
      font-weight: 700
  .card-text.disabled
      color: #ffff66
  .card-text-mq
    display: none
    text-align: center
  @media screen and (max-width:319px)
    .card
      display: none
    .card-text
      display: none
    .card-text-mq
      display: flex
</style>