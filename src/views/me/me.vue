<template>
  <div class="i-me">
    <div class="i-me-top">
      <div class="i-me-top-info">
        <div class="i-me-top-info-avatar">
          <van-image :src="avatar" round></van-image>
          <div class="i-me-top-userInfo">
            <span>xgChange</span>
          </div>
        </div>
        <van-icon class-prefix="my-icon" name="shezhi" @click="openSetting"></van-icon>
      </div>
      <div class="i-me-top-mid">
        <div class="i-me-top-mid-collect">
          <span class="count">200</span>
          <span class="text">收藏夹</span>
        </div>
        <div class="i-me-top-mid-history">
          <span class="count">26</span>
          <span class="text">足迹</span>
        </div>
      </div>
    </div>
    <div class="i-me-myorder">
      <div class="i-me-myorder-title">
        <span>我的订单</span>
        <span>查看更多订单 ></span>
      </div>
      <div class="i-me-myorder-info">
        <div class="i-me-myorder-info-box">
          <van-icon class-prefix="my-icon" name="daifukuan" color="#ffbd27" badge="2"></van-icon>
          <span>待付款</span>
        </div>
        <div class="i-me-myorder-info-box">
          <van-icon class-prefix="my-icon" name="daifahuo" color="#53a4fc"></van-icon>
          <span>待发货</span>
        </div>
        <div class="i-me-myorder-info-box">
          <van-icon class-prefix="my-icon" name="daishouhuo" color="#359443"></van-icon>
          <span>待收货</span>
        </div>
        <div class="i-me-myorder-info-box">
          <van-icon class-prefix="my-icon" name="daipingjia" color="#ff7b6a"></van-icon>
          <span>待评价</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avatar: require('@/assets/image/default.png')
    }
  },
  methods: {
    openSetting () {
      console.log('ffa')
    }
  }
}
</script>