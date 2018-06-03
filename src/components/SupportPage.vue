<template lang="pug">
  .content
    about-company
    our-mission
    reasons
    our-services
</template>

<script>
  import AboutCompany from './AboutCompany'
  import OurMission from './OurMission'
  import Reasons from './Reasons'
  import OurServices from './OurServices'

  export default {
    components: {
      Reasons,
      OurMission,
      OurServices,
      AboutCompany
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    padding 50px 0
    > section
      margin-bottom 50px
</style>
