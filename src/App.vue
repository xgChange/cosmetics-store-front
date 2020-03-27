<template>
  <div id="app">
    <router-view></router-view>

    <!-- tab-bar -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/common/tabbar'
export default {
  components: {
    TabBar
  }
}
</script>

<style lang="scss">
@import "./assets/icon/iconfont.css";
</style>
