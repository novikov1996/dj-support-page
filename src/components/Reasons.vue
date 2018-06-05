<template lang="pug">
  section#reason
    .slider
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  @import "../assets/variabels.styl"
  #reason
    position relative
    background url("/static/images/reason-bg.png") no-repeat
    width 100%
    display flex
    justify-content flex-end
    height 660px
    .slider
      display flex
      width 85%
      background url("/static/images/gradient.png") center center no-repeat
      background-size cover
</style>
