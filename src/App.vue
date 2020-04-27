<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->

    <!-- tab-bar -->
    <i-tab-bar v-show="!noShowNav"></i-tab-bar>
  </div>
</template>

<script>
import ITabBar from './components/common/ITabBar.vue'
import { getUserInfo } from './api/user/user'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    ITabBar,
  },
  data () {
    return {
      noShowNav: false,
    }
  },
  computed: {
    ...mapGetters(['getterUserInfo'])
  },
  methods: {
    ...mapActions(['setUserInfo'])
  },
  watch: {
    $route (to, from) {
      let { meta } = to
      this.noShowNav = meta.noShowNav || false

      if (localStorage.getItem('myToken')) {
        if (!localStorage.getItem('userInfo')) {
          getUserInfo().then(res => {
            if (res.errCode === 0) {
              const userInfo = JSON.stringify(res.data[0])
              localStorage.setItem('userInfo', userInfo)
              this.setUserInfo(JSON.parse(localStorage.getItem('userInfo')))
            }
          })
        } else {
          if (!this.getterUserInfo) {
            this.setUserInfo(JSON.parse(localStorage.getItem('userInfo')))
          }
        }
      }
    },
  },
}
</script>

<style lang="scss">
@import "./assets/icon/iconfont.css";

#app {
  max-width: 750px;
  height: 100%;
  margin: 0 auto;
  background: #f7f7f7;
}
</style>
