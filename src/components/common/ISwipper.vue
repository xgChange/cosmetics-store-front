<template>
  <div class="i-swipper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        '//img.alicdn.com/imgextra/i1/112/O1CN015RJyTr1ChKwyV4e2Y_!!112-0-luban.jpg',
        '//gw.alicdn.com/imgextra/i1/822255/O1CN01BboFEP1SWpiV4XJGc_!!822255-0-lubanu.jpg'
      ]
    }
  }
}
</script>

<style>
</style>