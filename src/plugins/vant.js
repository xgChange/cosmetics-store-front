import Vue from 'vue'
import { Button, Tabbar, TabbarItem } from 'vant'
;[Button, Tabbar, TabbarItem].forEach(item => {
  Vue.use(item)
})
