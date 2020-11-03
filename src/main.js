import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('currency', value => {
  return ` R$  ${value.toLocaleString()}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
