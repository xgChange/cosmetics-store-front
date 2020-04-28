<template>
  <div class="i-goods-List">
    <i-search @searchInfo="getSearchInfo">
      <van-icon name="arrow-left" size="25" @click="goBack" />
    </i-search>
    <i-goods-grid :goodsList="goodsList"></i-goods-grid>
  </div>
</template>

<script>
import ISearch from '../../components/common/iSearch'
import IGoodsGrid from '../../components/common/iGoodsGrid'
import { getGoodsCategoryInfoBywords } from '../../api/goods/goods'

export default {
  components: {
    ISearch,
    IGoodsGrid
  },
  created () {
    const { searchId } = this.$route.query

    if (searchId) {
      this.initGoodsData(parseInt(searchId))
    }
  },
  data () {
    return {
      goodsList: []
    }
  },
  methods: {
    initGoodsData (id) {
      getGoodsCategoryInfoBywords(id).then(res => {
        if (res.errCode === 0) {
          this.goodsList = res.data.map(item => {
            item.price = item.price / 100
            return item
          })
        }
      })
    },
    getSearchInfo (d) {
      this.goodsList = d
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>