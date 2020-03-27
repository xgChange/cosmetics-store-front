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
  GridItem
} from 'vant'

Vue.use(Lazyload)
;[Button, Tabbar, TabbarItem, Field, Swipe, SwipeItem, Grid, GridItem].forEach(
  item => {
    Vue.use(item)
  }
)
