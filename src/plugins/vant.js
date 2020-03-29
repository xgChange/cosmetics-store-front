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
  Search,
  SubmitBar,
  Card,
  NavBar,
  Stepper,
  Checkbox,
  CheckboxGroup
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
  Search,
  SubmitBar,
  Card,
  NavBar,
  Stepper,
  Checkbox,
  CheckboxGroup
].forEach(item => {
  Vue.use(item)
})
