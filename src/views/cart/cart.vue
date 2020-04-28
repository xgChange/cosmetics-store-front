<template>
  <div class="i-cart">
    <div class="i-cart-top-bar">
      <van-nav-bar title="购物车" right-text="管理" @click-right="onClickRight" />
    </div>
    <div class="i-cart-mid-info">
      <van-checkbox-group v-model="checkGroup" ref="checkboxGroup">
        <van-checkbox :name="a" label-disabled v-for="(item, index) in cartStore" :key="index">
          <van-card
            :num="item.count"
            :price="item.price * item.count"
            :desc="item.color"
            :title="item.name"
            :thumb="item.poster"
          >
            <template #footer>
              <van-stepper v-model="item.count" />
            </template>
          </van-card>
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <div class="i-cart-end-submit">
      <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="allChecked">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      allChecked: false,
      checked: false,
      checkGroup: [],
      cartStore: [],
      price: 0
    }
  },
  created () {
    let str = localStorage.getItem('cartStore')
    if (str) {
      let temp = JSON.parse(str)
      this.cartStore = temp.map(item => {
        item.price = item.price / 100
        return item
      })
    }
  },
  watch: {
    cartStore: {
      handler (v) {
        let price = v.reduce((cur, next) => {
          return cur.count * cur.price + next.count * next.price
        })
        this.price = price
      },
      deep: true
    }
  },
  methods: {
    onClickRight () {
      console.log('ooo')
    },
    onSubmit () {
      console.log('ok')
    }
  }
}
</script>

<style>
</style>