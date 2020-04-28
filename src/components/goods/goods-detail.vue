<template>
  <div class="i-goods-detail">
    <i-swipper :images="images"></i-swipper>
    <div class="i-goods-detail-intro-box">
      <div class="intro-box-top">
        <div class="intro-box-top-price">
          <span class="flag">￥</span>
          <span class="price">{{goodsDetailData.price}}</span>
        </div>
        <van-icon name="like-o" size="20"></van-icon>
      </div>
      <div class="intro-box-content">
        <h1 class="title">{{goodsDetailData.title}}</h1>
      </div>
    </div>
    <div class="i-goods-detail-choose-box">
      <van-cell-group>
        <van-cell is-link class="location" @click="switchLocation">
          <template #title>
            <span>地址</span>
            <van-icon name="location-o" size="16"></van-icon>
            <span class="location-text">{{addressInfo ? addressInfo : '湖南省怀化市鹤城区'}}</span>
          </template>
        </van-cell>

        <van-cell is-link class="choose" @click="showSku = true">
          <template #title>
            <span>选择</span>
            <span class="choose-text">选择商品规格</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="i-goods-detail-comment-box">
      <div class="title">
        <div class="title-left">
          <span class="text">评价</span>
          <span class="remark">500+</span>
        </div>
        <span class="title-right" @click="showComment">
          <span>查看全部</span>
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="i-goods-detail-goodsImages-box">
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
    </div>

    <i-address
      :isShowArea="isShowArea"
      :addressList="addressList"
      @addressClose="onCloseArea"
      @selectAddress="selectItem"
    ></i-address>

    <van-sku
      v-model="showSku"
      :sku="skuData.sku"
      :goods="skuData.goods_info"
      :goods-id="skuData.goods_id"
      :hide-stock="skuData.sku.hide_stock"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import ISwipper from '../../components/common/ISwipper'
import IAddress from '../../components/common/IAddress'
import { goodsDetailData } from '../../mock/goodsList'
import { getGoodsDetailBywords } from '../../api/goods/goods'

export default {
  components: {
    ISwipper,
    IAddress,
  },
  data () {
    return {
      images: [
        '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/92540/30/1199/142578/5dbadae0E0e17493e/63dd7b45f8e6f944.jpg!q80.dpg.webp',
        '//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/105898/34/1199/40347/5dbadae0E8a0fbd85/bf4afdd1ea0c12a8.jpg!q70.dpg.webp'
      ],
      isShowArea: false,
      showSku: false,
      skuData: goodsDetailData,
      addressInfo: '',
      goodsDetailData: {}
    }
  },
  created () {
    const { id } = this.$route.params
    if (id) {
      this.getGoodsDetail(id)
    }
  },
  computed: {
    addressList () {
      const { userInfo } = this.$store.state.user
      return userInfo && userInfo.t_addresses ? userInfo.t_addresses : []
    }
  },
  methods: {
    onAdd () {
      this.$router.push({ name: 'settingInfo', params: { info: 'address' }, query: { newAdd: true } })
    },
    onEdit (item, index) {
      this.$router.push({ name: 'settingInfo', params: { info: 'address' }, query: { addressId: item.id } })
    },
    switchLocation () {
      this.isShowArea = true
    },
    onCloseArea (v) {
      this.isShowArea = v
    },
    selectItem (val) {
      this.addressInfo = val.address
      this.onCloseArea(false)
    },
    showComment () {
      this.$emit('showComment', true)
    },
    onBuyClicked (e) {
      console.log(e)
    },
    onAddCartClicked (e) {
      console.log(e)
    },
    getGoodsDetail (key) {
      getGoodsDetailBywords(key).then(res => {
        if (res.errCode === 0) {
          this.goodsDetailData = res.data[0]
        }
      })
    }
  }
}
</script>

<style>
</style>