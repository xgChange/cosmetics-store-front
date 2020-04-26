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
      this.initGoods(title)
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
