<template lang="pug">
  section#reason
    .slider
      .list
        .list-item(v-for="(faq, index) in faqList", :class="faqItemClass(faq)", @click="handlerItemClick(index)")
          .list-item-header
            p.list-item-header_index {{index + 1}}
            p.list-item-header_title {{faq.title}}
            .list-item-header_arrow
          p.list-item_description {{faq.description}}
</template>

<script>
  export default {
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
        activeItem: 0
      }
    },
    methods: {
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
      overflow-y scroll

  .list
    margin 51px 25px 51px 25%
    padding-right 51px
    width 100%
    .list-item
      width 100%
      margin-bottom 25px
    .list-item_description
      transform: scaleY(0)
      transform-origin top
      transition: transform 0.3s ease-out;
      font-size 1.4em
    .list-item-header
      background-color white
      box-sizing border-box
      padding 11px 23px

  .list-item.active,
  .list-item.active .list-item-header,
  .list-item.active .list-item_description
    width 105%
    margin-left -2.5%
    transition width 0.3s, margin-left 0.3s

  .list-item.active
    .list-item_description
      padding-top 29px
      padding-bottom 15px
      padding-left 28px
      padding-right 28px
      transform-origin top
      transform: scaleY(1)
      transition: transform 0.3s ease-out;
      background-color white
    .list-item-header
      transition: transform 0.3s ease-out;
    .list-item-header_arrow
      transform rotate(180deg)
      transition: transform 0.3s ease-out;

  .list-item-header_index
    color rgb(31, 120, 189)
    font-size 2.55em
    height 46px
    line-height 46px
    font-weight bold
    display inline-block
    border-right 1px solid rgb(31, 120, 189)
    padding-right 21px
    float left

  .list-item-header_title
    font-weight 500
    font-size 1.5em
    line-height 46px
    margin-left 13px
    display inline-block

  .list-item-header_arrow
    line-height 46px
    width 46px
    height 46px
    display inline-block
    background url("/static/images/angle-down.svg") no-repeat center center
    transition: transform 0.3s ease-out;
    float right
    background-size 60% 60%
</style>
