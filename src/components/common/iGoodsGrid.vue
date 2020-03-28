<template>
  <div class="i-goods-grid">
    <slot></slot>
    <van-grid :border="false" :column-num="2" :gutter="7">
      <van-grid-item v-for="item in goodsList" :key="item.id">
        <div class="i-box">
          <van-image :src="item.imgurl" />
          <p class="i-box-intro">
            {{ item.intro }}
          </p>
          <div class="i-box-price">
            <span class="flag">￥</span>
            <span class="prefix">818</span>
            <span class="comment">4.6万评价</span>
          </div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { goodsList } from '../../mock/goodsList'
export default {
  data() {
    return {
      goodsList: []
    }
  },
  created() {
    this.goodsList = goodsList
  }
}
</script>

<style></style>
