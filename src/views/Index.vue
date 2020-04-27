<template>
  <div class="index">
    <van-sticky>
      <i-input></i-input>
    </van-sticky>
    <i-swipper :images="images"></i-swipper>
    <i-grid></i-grid>
    <i-goods-grid class="index-swiper" :goodsList="goodsList">
      <div class="newProduct">
        <span>新品上架</span>
      </div>
    </i-goods-grid>
  </div>
</template>

<script>
import IInput from '../components/common/IInput'
import ISwipper from '../components/common/ISwipper'
import IGrid from '../components/common/IGrid'
import IGoodsGrid from '../components/common/iGoodsGrid'
import { getGoodsCategoryInfoBywords } from '../api/goods/goods'
import { getUserInfo } from '../api/user/user'

export default {
  name: 'Index',
  data () {
    return {
      images: [
        '//img.alicdn.com/imgextra/i1/112/O1CN015RJyTr1ChKwyV4e2Y_!!112-0-luban.jpg',
        '//gw.alicdn.com/imgextra/i1/822255/O1CN01BboFEP1SWpiV4XJGc_!!822255-0-lubanu.jpg',
      ],
      goodsList: [],
    }
  },
  created () {
    getGoodsCategoryInfoBywords('手机2').then((res) => {
      this.goodsList = res.data
    })
  },
  components: {
    IInput,
    ISwipper,
    IGrid,
    IGoodsGrid,
  },
}
</script>

<style lang="scss" scoped>
.index {
  max-height: 100%;
  overflow: auto;
  .index-swiper {
    padding-bottom: 50px;
  }
  .newProduct {
    font-size: 16px;
    text-align: center;
    margin: 10px 0;
    color: #ff4422;
    font-weight: bolder;
  }
}
</style>
