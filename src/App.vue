<template lang="pug">
  #app
    nav-bar
    router-view
    //footer-component
</template>

<script>
  import FooterComponent from './components/FooterComponent'
  import NavBar from './components/NavBar'

  export default {
    name: 'App',
    components: {
      NavBar,
      FooterComponent
    }

  }
</script>

<style lang="stylus">
  @import "assets/common.styl"
</style>
