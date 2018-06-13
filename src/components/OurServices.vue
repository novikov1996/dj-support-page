<template lang="pug">
  section#our-services
    .service-details
      modal(v-if="isModalVisible", @close="handlerDetailsModalClose")
        template(slot="body")
          .columns
            .column
              .youtube-video
                .youtube-video-container
                  iframe(width="100%" height="100%" src="https://www.youtube.com/embed/9PJTVQryxkI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen)
            .column
              .is-16-by-9-desktop
                .is-overlay
                  .list.choosen-service-section
                    .list.choosen-service-description
                      .list-item(v-for="(faq, index) in faqList", :class="faqItemClass(faq)", @click="handlerItemClick(index)")
                        .list-item-header
                          p.list-item-header_title {{faq.title}}
                          .list-item-header_arrow
                        p.list-item_description {{faq.description}}
                    .buttons
                      a.close-modal-button(@click="handlerDetailsModalClose") Повернутись
    section-logo(bg="/static/images/services-logo.png" title="Наші сервіси")
    .services-container
      .big-services
        service-card(v-for="(service, index) in services" v-if="service.size === 'big'" :service="service" :key="index" @show-details="handlerShowDetails")
      .small-services
        service-card(v-for="(service, index) in services" v-if="service.size === 'small'" :service="service" :key="index" @show-details="handlerShowDetails")
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
        faqList: [{title: 'Title', description: 'Description'}, {
          title: 'Title',
          description: 'Description'
        }, {title: 'Title', description: 'Description'}, {title: 'Title', description: 'Description'}, {
          title: 'Title',
          description: 'Description'
        }, {title: 'Title', description: 'Description'}, {
          title: 'Title',
          description: 'Description'
        }, {title: 'Title', description: 'Description'}, {title: 'Title', description: 'Description'}],
        activeItem: 0,
        isModalVisible: false,
        choosenService: null,
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
    },
    methods: {
      handlerShowDetails (service) {
        this.isModalVisible = true
        this.choosenService = service
      },
      handlerDetailsModalClose () {
        this.isModalVisible = false
        this.choosenService = null
      },
      faqItemClass (faq) {
        return this.faqList[this.activeItem] === faq ? 'active' : 'collapsed'
      },
      handlerItemClick (index) {
        this.activeItem = index === this.activeItem ? -1 : index
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
        justify-content space-between
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
          justify-content flex-start
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

    @media screen and (max-width: 1023px) {
      .choosen-service-section {
        overflow: hidden;
      }
    }

  .choosen-service-section
    padding 38px 17px 15px
    height 100%
    .choosen-service-description
      height calc(100% - 3rem)
      overflow scroll
      margin-bottom 1rem
    .buttons
      position relative
      bottom 0
      height 2rem
    .close-modal-button
      font-size 18px
      color: rgb(31, 120, 189)
      padding-left 23px
      background transparent url("/static/images/angle-left.svg") no-repeat left center
      background-size 18px 18px

  .list
    width 100%
    .list-item
      width 100%
      margin-bottom 31px
      color: black
    .list-item_description
      transform: scaleY(0)
      transform-origin top
      transition: transform 0.3s ease-out;
      font-size 1.4em
      height 0
    .list-item-header
      background-color white
      box-sizing border-box
      height 53px
      padding 0 11px
      border 2px solid rgb(31, 120, 189)

  .list-item.active
    .list-item_description
      padding-top 15px
      padding-bottom 15px
      padding-left 11px
      padding-right 11px
      transform-origin top
      transform: scaleY(1)
      transition: transform 0.3s ease-out;
      background-color white
      border 2px solid rgb(31, 120, 189)
      border-top none
      font-size 1rem
      height auto
    .list-item-header
      transition: transform 0.3s ease-out;
      border-bottom none
    .list-item-header_arrow
      transform rotate(180deg)
      transition: transform 0.3s ease-out;

  .list-item-header_title
    font-weight 500
    font-size 20px
    line-height 46px
    display inline-block

  .list-item-header_arrow
    line-height 46px
    width 32px
    height 46px
    display inline-block
    background url("/static/images/angle-down.svg") no-repeat center center
    transition: transform 0.3s ease-out;
    float right
    background-size 60% 60%

</style>
