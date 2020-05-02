<template>
  <div class="i-goods-grid">
    <slot></slot>
    <van-grid :border="false" :column-num="2" :gutter="6">
      <van-grid-item v-for="item in goodsList" :key="item.id" @click="toDetail(item.id)">
        <div class="i-box">
          <van-image :src="'http://localhost:3001' + item.picture" />
          <p class="i-box-intro">{{ item.name }}</p>
          <div class="i-box-price">
            <span class="flag">￥</span>
            <span class="prefix">{{item.price}}</span>
          </div>
        </div>
      </van-grid-item>
    </van-grid>
    <div class="i-goods-grid-default" v-if="goodsList && goodsList.length === 0">暂无商品</div>
  </div>
</template>

<script>

export default {
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      }
    },
  },
  data () {
    return {}
  },
  methods: {
    toDetail (id) {
      this.$router.push({ name: '商品详情', params: { id } })
    }
  }
}
</script>

<style></style>
