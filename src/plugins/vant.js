import Vue from 'vue'
import {
  Button,
  Tabbar,
  TabbarItem,
  Field,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Icon,
  Image
} from 'vant'

Vue.use(Lazyload)
;[
  Button,
  Tabbar,
  TabbarItem,
  Field,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Icon,
  Image
].forEach(item => {
  Vue.use(item)
})
