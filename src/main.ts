import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Appwrite from '@/api/index'

Vue.config.productionTip = false
Vue.prototype.api = Appwrite

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
