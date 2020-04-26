<template>
  <div class="i-slide-content">
    <van-grid :border="false" :column-num="2" :gutter="10">
      <van-grid-item v-for="item in goodsArr" :key="item.id">
        <van-image :src="item.picture" />
        <span>{{ item.name }}</span>
      </van-grid-item>
    </van-grid>
    <div
      class="i-slide-content-default"
      v-if="goodsArr && goodsArr.length === 0"
    >
      暂无商品
    </div>
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
  data() {
    return {
      goodsArr: [],
    }
  },
  created() {
    const id = this.$route.query.title
    this.initGoods(id)
  },
  watch: {
    $route(v) {
      let { title } = v.query
      if (title === 10) {
        this.initGoods(title)
      }
    },
    secondCategory(v) {
      if (this.$route.query.title !== '10') {
        this.goodsArr = v
      }
    },
  },
  methods: {
    initGoods(id) {
      getGoodsCategoryInfoBywords(id).then((res) => {
        this.goodsArr = res.data
      })
    },
  },
}
</script>

<style></style>
