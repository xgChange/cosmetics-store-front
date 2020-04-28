<template>
  <div class="i-search">
    <slot></slot>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      :show-action="showCancel"
      @search="onSearch"
      @cancel="onCancel"
      @focus="showCancel = true"
    />
  </div>
</template>

<script>
import { searchGoodsByWords } from '../../api/goods/goods'
export default {
  data () {
    return {
      value: '',
      showCancel: false
    }
  },
  methods: {
    onSearch (key) {
      searchGoodsByWords(key).then(res => {
        if (res.errCode === 0) {
          this.$emit('searchInfo', res.data)
        }
      })
    },
    onCancel () {
      this.showCancel = false
    }
  }
}
</script>

<style>
</style>