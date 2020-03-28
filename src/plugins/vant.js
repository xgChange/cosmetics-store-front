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
  Image,
  Sticky
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
  Image,
  Sticky
].forEach(item => {
  Vue.use(item)
})
