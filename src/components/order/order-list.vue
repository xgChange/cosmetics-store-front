<template>
  <div class="i-order-list">
    <van-card
      v-for="(item) in orderMsg"
      :key="item.id"
      :num="item.t_ordertetail.goodscount"
      :price="item.t_ordertetail.goodscount * (item.t_ordertetail.t_good.price / 100)"
      :desc=" item.t_ordertetail.goodsDetail.color"
      :title="item.t_ordertetail.t_good.name"
      :thumb="item.t_ordertetail.t_good.poster"
    >
      <template #footer>
        <van-button size="small" v-show="activeKey === 0" @click="apply(item, activeKey)">支付</van-button>
        <van-button size="small" v-show="activeKey === 2" @click="apply(item, activeKey)">确认收货</van-button>
        <van-button size="small" v-show="activeKey === 3" @click="toComment(item)">评价</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
import { updateOrder } from '../../api/apply/apply'

export default {
  props: {
    activeKey: {
      type: Number
    },
    orderMsg: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    toComment (item) {
      this.$router.push({ path: '/publish', query: { goods_id: item.t_ordertetail.goods_id } })
    },
    apply (o, activeKey) {
      let obj = {
        id: o.order_id
      }
      if (activeKey === 0) {
        obj.status = '待发货'
        obj.apply_status = '已支付'
      }
      if (activeKey === 2) {
        obj.status = '待评价'
      }

      updateOrder(obj).then(res => {
        if (res.errCode === 0) {
          this.$toast.success({
            message: activeKey === 0 ? '支付成功' : '收货成功',
            forbidClick: true,
            onClose: () => {
              this.$router.go(-1)
            }
          })
        }
      })
    }
  }
}
</script>

<style>
</style>