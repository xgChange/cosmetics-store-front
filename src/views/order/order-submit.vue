<template>
  <div class="i-order-submit">
    <div class="i-order-top-bar">
      <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="i-order-info" v-if="goodsInfo">
      <div class="i-order-address">
        <van-icon name="location-o" />
        <div class="right">
          <div class="top">
            <span>收货人：{{goodsInfo.addressInfo.name}}</span>
            <span class="phone">{{goodsInfo.addressInfo.tel}}</span>
          </div>
          <div class="bottom">
            <span>收货地址：{{goodsInfo.addressInfo.address}}</span>
          </div>
        </div>
      </div>
      <van-card
        :num="goodsInfo.count"
        :price="goodsInfo.price * goodsInfo.count"
        :desc="goodsInfo.title"
        :title="goodsInfo.name"
        :thumb="goodsInfo.poster"
      ></van-card>
      <van-cell title="商品名称" :value="goodsInfo.name" />
      <van-button @click="submit" class="submit" type="primary">提交订单</van-button>
    </div>
  </div>
</template>

<script>
import { createOrder, cancelOrder } from '../../api/apply/apply'

export default {
  data () {
    return {
    }
  },
  computed: {
    goodsInfo () {
      return this.$store.state.goods.info
    },
    userInfo () {
      return this.$store.state.user.userInfo
    }
  },
  created () {
    if (!this.$store.state.goods.info) {
      this.$dialog({ message: '请重新提交' }).then(res => this.$router.go(-1))
    }
  },

  methods: {
    onClickLeft () {
      this.$dialog.confirm({
        message: '是否取消订单?',
      })
        .then(() => {
          let goodsInfo = Object.assign({}, this.goodsInfo)
          goodsInfo.price = goodsInfo.price * 100
          goodsInfo.cancel = true
          createOrder(goodsInfo).then(res => {
            if (res.errCode === 0) {
              this.$toast.success('已取消')
              this.$router.go(-1)
            }
          })
        })
    },
    submit () {
      let goodsInfo = Object.assign({}, this.goodsInfo)
      goodsInfo.price = goodsInfo.price * 100
      goodsInfo.cancel = false
      createOrder(goodsInfo).then(res => {
        if (res.errCode === 0) {
          this.$toast.success('提交成功')
          this.$router.push('/me')
        }
      })
    }
  }
}
</script>

<style>
</style>