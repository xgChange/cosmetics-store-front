<template>
  <div class="i-slide-content">
    <van-grid :border="false" :column-num="2" :gutter="10">
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <span>丝绒口红</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <span>水稳唇膏</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    s: {
      type: Number
    }
  },
  created () {
    console.log(this.s)
  }
}
</script>

<style></style>
