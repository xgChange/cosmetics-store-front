<template>
  <div class="i-search">
    <slot></slot>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      :show-action="showCancel"
      @search="onSearch"
      @cancel="onCancel"
      @focus="focus"
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
  props: {
    go: {
      type: String
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
    },
    focus () {
      if (this.go === 'category') {
        this.$router.push('/goods/search')
      }
      this.showCancel = false
    }
  }
}
</script>

<style>
</style>