import Vue from 'vue'
import App from './App.vue'

////////////////////////////////
import router from './router'
import axios from 'axios'

axios.defaults.baseUrl = 'http://localhost:8000/'
Vue.prototype.$http = axios
Vue.prototype.$echarts = window.echarts


////////////////////////////////
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
