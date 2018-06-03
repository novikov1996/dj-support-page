<template lang="pug">
  section#our-services
    section-logo(bg="/static/images/services-logo.png" title="Наші сервіси")
    .services-container
      .big-services
        service-card(v-for="(service, index) in services" v-if="service.size === 'big'" :service="service" :key="index")
      .small-services
        service-card(v-for="(service, index) in services" v-if="service.size === 'small'" :service="service" :key="index")
</template>

<script>
  import SectionLogo from './SectionLogo'
  import ServiceCard from './ServiceCard'

  export default {
    components: {
      SectionLogo,
      ServiceCard
    },
    data () {
      return {
        services: [
          {
            title: 'Створити ТОВ онлайн',
            link: '#',
            bg: 'tov',
            size: 'big',
            rating: 5
          },
          {
            title: 'Конструктор документів',
            link: '#',
            bg: 'constructor',
            size: 'big',
            rating: 5
          },
          {
            title: 'Консультація з юристом',
            link: '#',
            bg: 'consultation',
            size: 'small',
            rating: 5
          },
          {
            title: 'Перевірити договір',
            link: '#',
            bg: 'contract',
            size: 'small',
            rating: 5
          },
          {
            title: 'Дом юриста Analytics',
            link: '#',
            bg: 'analytics',
            size: 'small',
            rating: 5
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../assets/variabels.styl"

  #our-services
    padding 0 100px
    width 100%
    display flex
    flex-direction column
    align-items center
    color default-color
    .services-container
      width 100%
      display flex
      flex-direction row
      justify-content space-around
      .big-services, .small-services
        display flex
        flex-direction column
        align-items center
        padding 0 20px
      .big-services
        width 60%
      .small-services
        width 40%
  @media screen and (max-width: 1200px)
    #our-services
      padding 0 50px
      .services-container
        flex-direction row
        .big-services, .small-services
          padding 0 20px
          width 50%
        .big-services
          order 2
        .small-services
          order 1
  @media screen and (max-width: 980px)
    #our-services
      padding 0 10px
      .services-container
        flex-direction column
        .big-services, .small-services
          padding 0 10px
          width 100%
</style>
