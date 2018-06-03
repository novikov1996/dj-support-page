import Vue from 'vue'
import Router from 'vue-router'
import SupportPage from '../components/SupportPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SupportPage',
      component: SupportPage
    }
  ]
})
