<template>
  <div class="i-cart">
    <div class="i-cart-top-bar">
      <van-nav-bar title="购物车" right-text="管理" @click-right="onClickRight" />
    </div>
    <div class="i-cart-mid-info">
      <van-checkbox-group v-model="checkGroup" ref="checkboxGroup">
        <van-checkbox name="a" label-disabled>
          <van-card
            :num="value"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #footer>
              <van-stepper v-model="value" />
            </template>
          </van-card>
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <div class="i-cart-end-submit">
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="allChecked">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      value: 1,
      allChecked: false,
      checked: false,
      checkGroup: []
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