import Vue from 'vue'
import App from './App'
import router from './router'
import Modal from './components/Modal'

Vue.config.productionTip = false

Vue.component(Modal.name, Modal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
