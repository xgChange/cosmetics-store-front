<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- tab-bar -->
    <i-tab-bar v-show="!noShowNav"></i-tab-bar>
  </div>
</template>

<script>
import ITabBar from './components/common/ITabBar.vue'
export default {
  components: {
    ITabBar
  },
  data () {
    return {
      noShowNav: false
    }
  },
  watch: {
    '$route' (to, from) {
      let { meta } = to
      this.noShowNav = meta.noShowNav || false
    }
  }
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
