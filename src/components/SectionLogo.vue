<template lang="pug">
  .logo-wrapper
    .logo(:style="bgLogo")
    .title
      h3 {{title}}
</template>

<script>
export default {
  props: {
    bg: {
      type: String
    },
    title: {
      type: String
    }
  },
  computed: {
    bgLogo () {
      return {backgroundImage: `url(${this.bg})`}
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../assets/variabels.styl"

  .logo-wrapper
    width 100%
    display flex
    flex-direction column
    align-items center
    color default-color

    .logo
      height 115px
      width 115px
      background 50% 50%/cover no-repeat
      margin-bottom 20px
      border-radius 50%
      background-color white-color
      box-shadow 0 10px 20px rgba(0,0,0,0.05), 0 6px 6px rgba(0,0,0,0.13)

    .title
      margin-bottom 20px
</style>
