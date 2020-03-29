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
  Sticky,
  Sidebar,
  SidebarItem,
  Search
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
  Sticky,
  Sidebar,
  SidebarItem,
  Search
].forEach(item => {
  Vue.use(item)
})
