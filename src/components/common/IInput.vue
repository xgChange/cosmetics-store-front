<template>
  <div class="I-input">
    <van-field
      v-model="value"
      icon-prefix="my-icon"
      left-icon="sortfenlei"
      right-icon="cart"
      placeholder="请输入宝贝名称"
      @focus="onFocus"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      showText: true
    }
  },
  methods: {
    onFocus (e) {
      this.$emit('focus', e)
    }
  }
}
</script>

<style lang="scss" scoped>
//
</style>