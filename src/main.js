
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
let instance = axios.create({
    baseURL: "http://localhost:8088",
    timeout: 1000,
    headers: {
        'Content-Type': "application/json"
    }
});
Vue.prototype.$axios = instance
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
