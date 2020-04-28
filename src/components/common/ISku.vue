<template>
  <div class="i-sku">
    <div class="i-sku-top">
      <van-image
        width="100"
        height="100"
        src="https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg"
      ></van-image>
      <div class="i-sku-top-right">
        <div class="price">
          <span class="price-prefix">￥</span>
          <span class="price-num">{{skuDetail.price * valueStep}}</span>
        </div>
        <span class="tips">选择款式</span>
      </div>
    </div>
    <van-divider />
    <div class="i-sku-middle">
      <div class="i-sku-middle-text">颜色</div>
      <div class="i-sku-middle-radiogroup">
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio
            :name="item.color"
            icon-size="0.43rem"
            v-for="(item,index) in skuDetail.sku"
            :key="index"
          >{{item.color}}</van-radio>
        </van-radio-group>
      </div>
      <van-divider />

      <div class="i-sku-middle-count">
        <div class="count-text">购买数量</div>
        <van-stepper v-model="valueStep" integer />
      </div>
    </div>
    <van-divider />

    <div class="i-sku-bottom">
      <!-- <van-button class="cart" @click="addCart">加入购物车</van-button> -->
      <van-button class="buy" @click="goBuy">立即购买</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '',
      valueStep: 1,
      detail: {},
    }
  },
  props: {
    skuDetail: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    console.log(this.skuDetail)
  },
  methods: {
    // addCart () {
    //   if (!this.radio) {
    //     this.$toast.fail('至少选中有一种款式')
    //     return
    //   }
    //   this.detail = {
    //     color: this.radio,
    //     count: this.valueStep
    //   }
    //   this.$emit('onAddCart', this.detail)
    // },
    goBuy () {
      if (!this.radio) {
        this.$toast.fail('至少选中有一种款式')
        return
      }
      this.detail = {
        color: this.radio,
        count: this.valueStep
      }
      this.$emit('onBuy', this.detail)
    }
  }
}
</script>

<style>
</style>