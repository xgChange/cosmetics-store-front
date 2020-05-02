<template>
  <div class="i-slide-content">
    <van-grid :border="false" :column-num="2" :gutter="10">
      <van-grid-item v-for="item in goodsArr" :key="item.id" @click="toGoodsDetail(item.id)">
        <span>{{ item.name }}</span>
      </van-grid-item>
    </van-grid>
    <div class="i-slide-content-default" v-if="goodsArr && goodsArr.length === 0">暂无商品</div>
  </div>
</template>

<script>
import { getGoodsCategoryInfoBywords } from '../../api/goods/goods'

export default {
  props: {
    secondCategory: {
      type: Array,
    },
  },
  data () {
    return {
      goodsArr: [],
    }
  },
  created () {
    this.goodsArr = this.secondCategory
  },
  watch: {
    secondCategory (v) {
      if (this.$route.query.title !== '10') {
        this.goodsArr = v
      }
    },
  },
  methods: {
    toGoodsDetail (id) {
      this.$router.push({ path: '/goods/search', query: { searchId: id } })
    }
  },
}
</script>

<style></style>
