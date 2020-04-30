<template>
  <div class="i-order-list">
    <div class="i-order-top-bar">
      <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft" />
    </div>
    <van-tabs v-model="active">
      <van-tab title="待付款">
        <order-list :activeKey="active" :orderMsg="orderMsg"></order-list>
      </van-tab>
      <van-tab title="待发货">
        <order-list :activeKey="active" :orderMsg="orderMsg"></order-list>
      </van-tab>
      <van-tab title="待收货">
        <order-list :activeKey="active" :orderMsg="orderMsg"></order-list>
      </van-tab>
      <van-tab title="待评价">
        <order-list :activeKey="active" :orderMsg="orderMsg"></order-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OrderList from '../../components/order/order-list'
import { findOrder } from '../../api/apply/apply'

export default {
  components: {
    OrderList
  },
  data () {
    return {
      active: 0,
      activeName: ['待付款', '待发货', '待收货', '待评价'],
      orderMsg: []
    }
  },
  created () {
    this.checkRouter()
    this.initData(this.active)
  },
  watch: {
    active (v) {
      this.initData(v)
    }
  },
  methods: {
    initData (key) {
      let search = this.activeName[key]
      findOrder(search).then(res => {
        if (res.errCode === 0) {
          const data = res.data
          this.orderMsg = data.map(item => {
            item.t_ordertetail.goodsDetail = JSON.parse(item.t_ordertetail.goodsDetail)
            return item
          })
        }
      })
      // console.log(search)
    },
    onClickLeft () {
      this.$router.go(-1)
    },
    checkRouter () {
      const { searchId } = this.$route.query
      if (searchId >= 0 && searchId < 4) {
        let key = parseInt(searchId)
        this.active = key
      } else {
        this.$dialog({ message: '请求错误' }).then(() => this.$router.go(-1))
      }
    }
  }
}
</script>

<style>
</style>