<template>
  <div class="i-goods-detail">
    <i-swipper :images="goodsDetailData.picture"></i-swipper>
    <div class="i-goods-detail-intro-box">
      <div class="intro-box-top">
        <div class="intro-box-top-price">
          <span class="flag">￥</span>
          <span class="price">{{goodsDetailData.price}}</span>
        </div>
        <van-icon :name="isCollect ? 'like' : 'like-o'" size="20" @click="collect"></van-icon>
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
            <span class="location-text">{{addressInfo.address ? addressInfo.address : '请选择地址'}}</span>
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
    <!-- <div class="i-goods-detail-goodsImages-box">
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
    </div>-->

    <i-address
      :isShowArea="isShowArea"
      :addressList="addressList"
      @addressClose="onCloseArea"
      @selectAddress="selectItem"
    ></i-address>

    <van-popup round v-model="showSku" position="bottom" :style="{ height: '55%' }">
      <i-sku @onBuy="buy" :skuDetail="skuDetail"></i-sku>
    </van-popup>
  </div>
</template>

<script>
import ISwipper from '../../components/common/ISwipper'
import IAddress from '../../components/common/IAddress'
import { getGoodsDetailBywords, addGoodsCollect, getGoodsCollect } from '../../api/goods/goods'
import ISku from '../common/ISku'
import { debounce } from '../../utils/utilsMethods'
import { prefixServer } from '../../config/constKey'

export default {
  components: {
    ISwipper,
    IAddress,
    ISku
  },
  data () {
    return {
      images: [
        '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/92540/30/1199/142578/5dbadae0E0e17493e/63dd7b45f8e6f944.jpg!q80.dpg.webp',
        '//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/105898/34/1199/40347/5dbadae0E8a0fbd85/bf4afdd1ea0c12a8.jpg!q70.dpg.webp'
      ],
      isShowArea: false,
      showSku: false,
      addressInfo: '',
      goodsDetailData: {},
      skuDetail: {},
      cartStore: [],
      isCollect: false
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
      this.addressInfo = val
      this.onCloseArea(false)
    },
    showComment () {
      this.$emit('showComment', true)
    },
    buy (d) {
      if (!this.addressInfo.address) {
        this.$toast.fail('请选择地址')
        return
      }
      let goodsTempInfo = Object.assign(this.goodsDetailData, d, { addressInfo: this.addressInfo })
      this.$store.dispatch('setGoodsInfo', goodsTempInfo)
      this.$router.push('/ordersubmit')
    },
    // addCart (d) {
    //   let goodsTempInfo = Object.assign(this.goodsDetailData, d)

    //   let str = localStorage.getItem('cartStore')
    //   if (str) {
    //     let arr = JSON.parse(str)
    //     if (arr.some(item => item.color === goodsTempInfo.color)) {
    //       this.$toast.fail('只能添加一种')
    //       return
    //     }
    //     arr.push(goodsTempInfo)
    //     this.$store.dispatch('setGoodsInfo', arr)
    //     localStorage.setItem('cartStore', JSON.stringify(arr))
    //   } else {
    //     this.cartStore.push(goodsTempInfo)
    //     this.$store.dispatch('setGoodsInfo', this.cartStore)
    //     localStorage.setItem('cartStore', JSON.stringify(this.cartStore))
    //   }
    //   this.$toast.success('添加成功')
    // },
    getGoodsDetail (key) {
      getGoodsDetailBywords(key).then(res => {
        if (res.errCode === 0) {
          this.goodsDetailData = res.data[0]
          this.goodsDetailData.price = this.goodsDetailData.price / 100
          this.goodsDetailData.picture = this.goodsDetailData.picture.split(';').map(item => prefixServer + item)
          this.skuDetail = JSON.parse(this.goodsDetailData.detail)
          this.skuDetail.price = this.goodsDetailData.price
        }
      })
      getGoodsCollect().then(res => {
        if (res.errCode === 0) {
          this.isCollect = res.data ? res.data.collect : false
        }
      })
    },
    collect () {
      this.isCollect = !this.isCollect
      let obj = {
        goods_id: this.goodsDetailData.id,
        user_id: this.$store.state.user.userInfo.id,
        collect: this.isCollect
      }
      addGoodsCollect(obj).then(res => {
        if (res.errCode === 0) {
          return
        }
      })
    },
  }
}
</script>

<style>
</style>