<template>
  <div>
    <van-tabbar route safe-area-inset-bottom fixed>
      <template v-for="(item, index) in tabName">
        <van-tabbar-item replace :to="item.path" icon="home-o" :key="index">
          <span>{{item.name}}</span>
          <template #icon="props">
            <i
              :class="[props.active ? `my-icon my-icon-${item.alias}-active` : `my-icon my-icon-${item.alias}`]"
            ></i>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script>
import { tabName } from '../../utils/handleIconClass'
export default {
  data () {
    return {
      tabName: []
    }
  },
  created () {
    this.handleRoutes()
  },
  methods: {
    handleRoutes () {
      this.tabName = tabName
    }
  }
}
</script>

<style lang="scss" scoped>
</style>