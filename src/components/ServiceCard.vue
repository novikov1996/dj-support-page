<template lang="pug">
  .service-card(:class="size")
    .img-block(:style="bgLogo")
    .info-block
      .info
        .rating
          label Рейтинг:
          .stars
            .star(v-for="star in rating")
        .title
          p Сервіс:
            a  {{title}}
      .link
        a.more(:href="link") Дізнатися більше
</template>

<script>
export default {
  props: {
    service: Object
  },
  computed: {
    rating () {
      return this.service.rating
    },
    size () {
      return this.service.size
    },
    title () {
      return this.service.title
    },
    link () {
      return this.service.link
    },
    bgLogo () {
      return {backgroundImage: `url(/static/images/${this.service.bg}.png)`}
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../assets/variabels.styl"

  .service-card
    margin 20px
    width 100%
    display flex
    flex-direction column
    box-shadow 0 10px 20px rgba(0,0,0,0.05), 0 6px 6px rgba(0,0,0,0.13)
    color black-color
    max-width 440px

    .img-block
      padding-top 58%
      background 50% 50%/cover no-repeat

    .info-block
      padding 5px 10px
      width 100%
      display flex
      justify-content space-between
      background-color white-color
      .info
        display flex
        flex-direction column
        font-weight 500
        .rating
          font-size 0.9rem
          height 20px
          display flex
          align-items center
          .stars
            display flex
            align-items center
            padding 3px
            .star
              height 10px
              width 10px
              margin 2px 2px 0
              background url(/static/images/star.png) 50% 50%/cover no-repeat

        .title
          color primary-color
          padding 8px 0
          font-size 1rem
          a
            color black-color
      .link
        align-items center
        justify-content center
        display flex
        .more
          font-size 0.8rem
          width 115px
          text-align center
          line-height 30px
          color white-color
          background-color primary-color
          border-radius 15px
          font-weight 500
  @media screen and (min-width: 1200px)
    .service-card.big
      max-width 670px
      .info-block
        padding 10px 20px
        .info
          .title
            padding 10px 0
            font-size 1.25rem
        .link
          .more
            font-size 1.05rem
            line-height 42px
            width 180px
            border-radius 20px
</style>
