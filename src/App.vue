<template>
  <div id="app">
    <router-view></router-view>

    <!-- tab-bar -->
    <i-tab-bar></i-tab-bar>
  </div>
</template>

<script>
import ITabBar from './components/common/ITabBar.vue'
export default {
  components: {
    ITabBar
  }
}
</script>

<style lang="scss">
@import './assets/icon/iconfont.css';

#app {
  max-width: 750px;
  height: 100%;
  margin: 0 auto;
  background: #f7f7f7;
}
</style>
