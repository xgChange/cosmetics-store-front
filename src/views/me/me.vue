<template>
  <div class="i-me">
    <div class="i-me-top">
      <div class="i-me-top-info">
        <div class="i-me-top-info-avatar">
          <van-image :src="avatar" round></van-image>
          <div class="i-me-top-userInfo">
            <span>{{userInfo.nickname}}</span>
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
      </div>
      <div class="i-me-myorder-info">
        <div
          class="i-me-myorder-info-box"
          v-for="(item, index) in orderIcon"
          :key="item.id"
          @click="handle(index)"
        >
          <van-icon class-prefix="my-icon" :name="item.name" :color="item.color"></van-icon>
          <span>{{item.nickName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { orderIcon } from '../../utils/handleIconClass'
export default {
  data () {
    return {
      avatar: require('@/assets/image/default.png'),
      orderIcon
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.user.userInfo
    }
  },
  methods: {
    openSetting () {
      this.$router.push('/setting')
    },
    handle (index) {
      this.$router.push({ path: '/orderlist', query: { searchId: index } })
    },
  }
}
</script>