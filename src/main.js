import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
  router
}).$mount('#app')
