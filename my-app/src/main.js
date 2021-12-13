import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)

import './registerServiceWorker'

// import router from './router'
import store from './store'

import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
