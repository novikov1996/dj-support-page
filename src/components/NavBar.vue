<template lang="pug">
  header#header
    a.logo-link(href="#")
      img.logo-img( src="/static/images/logo.png" alt="")
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../assets/variabels.styl"

  #header
    width: 100%
    display flex
    justify-content center
    position relative
    border-bottom 4px solid primary-color
    .logo-link
      max-width 180px
      padding 6px 0 12px
      transition .3s ease-in-out all
      &:active, &:hover
        opacity .7
      .logo-img
        max-width 100%
        position relative
        z-index 20
        vertical-align middle

  @media (min-width: 1170px)
    #header
      padding 0 50px
      justify-content flex-start

</style>
