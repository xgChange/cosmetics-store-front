import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vConsole from 'vconsole'

import '@/plugins/vant.js'
import 'amfe-flexible/index'
Vue.config.productionTip = false

const vc = new vConsole()

document.addEventListener('DOMContentLoaded', resize)
window.addEventListener('resize', resize)

function resize() {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
