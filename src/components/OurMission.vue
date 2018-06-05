<template lang="pug">
  section#our-mission
    section-logo(bg="/static/images/mission-logo.png" title="Наша місія")
    .text-block
      p {{text}}
</template>

<script>
  import SectionLogo from './SectionLogo'

  export default {
    components: {
      SectionLogo
    },
    data () {
      return {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.`
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../assets/variabels.styl"

  #our-mission
    padding 0 100px
    width 100%
    display flex
    flex-direction column
    align-items center
    color default-color

    .text-block
      display flex
      max-width 575px
      font-size 1.2rem
      p
        font-weight 500
        line-height 1.5rem

  @media screen and (max-width: 1200px)
    #our-mission
      padding 0 50px
  @media screen and (max-width: 980px)
    #our-mission
      padding 0 10px
</style>
