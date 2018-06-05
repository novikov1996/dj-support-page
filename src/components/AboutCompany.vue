<template lang="pug">
  section#about-company(data-special="Листайте вниз")
    .content
      .text-block
        p
          b {{textBold}}
          | {{textNormal}}
      .img-block
    .footer
      .about-company-link
        a Про компанію
</template>

<script>
export default {
  data () {
    return {
      textBold: `Ми робимо юриспруденцію \nдоступнішою для українців, \nстворюючи юридичні онлайн- \nсервіси. `,
      textNormal: `З Дом юриста кожен \nможе отримати якісні юридичні \nпослуги перед екраном свого \nкомп’ютера.`
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../assets/variabels.styl"

  #about-company
    position relative
    padding 0 100px
    width 100%
    display flex
    flex-direction column
    min-height 460px

    &::before
      position absolute
      transform rotate(-90deg) translate(-40%)
      z-index 2
      overflow hidden
      left -175px
      width 460px
      font-size 1.5rem
      font-weight 500
      line-height 2rem
      display flex
      color gray-color
      justify-content center
      align-items center
      content attr(data-special)

    .content
      min-height 390px
      display flex
      flex-direction row
      color white-color
      background-color primary-color
      .img-block
        width 50%
        background url("/static/images/about-company.png") 50% 50%/cover no-repeat
      .text-block
        display flex
        justify-content center
        padding 75px 50px
        width 50%
        font-size 1.7rem
        p
          white-space pre-wrap
          font-weight 400
          line-height 2rem
    .footer
      height 70px
      background-color primary-color
      display flex
      .about-company-link
        width 240px
        color black-color
        background-color white-color
        display flex
        align-items center
        justify-content center
        font-size 1.5rem
        font-weight 600

  @media screen and (max-width: 1200px)
    #about-company
      padding 0 50px
      &::before
        left -205px

      .content
        .text-block
          padding 50px
          font-size 1.5rem
  @media screen and (max-width: 980px)
    #about-company
      padding 0 10px
      &::before
        display none

      .content
        flex-direction column
        .img-block
          min-height 250px
          order 1
          padding-bottom 30%
          width 100%
        .text-block
          order 2
          padding 25px 10px
          width 100%
</style>
