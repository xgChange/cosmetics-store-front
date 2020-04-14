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
  props: {
    images: {
      type: Array
    }
  },
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<style>
</style>