<template>
  <div class="i-setting">
    <div class="i-cart-top-bar">
      <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="i-setting-list">
      <van-list v-model="loading" :finished="finished">
        <van-cell
          v-for="item in list"
          :key="item.id"
          :title="item.title"
          is-link
          @click="toUpdate(item.id)"
        />
      </van-list>
    </div>
    <van-button type="danger" block @click="logout">退出登录</van-button>

    <i-address :isShowArea="isShowArea" :addressList="addressList" @addressClose="onCloseArea"></i-address>
  </div>
</template>

<script>
import ISearch from '../../components/common/iSearch'
import IAddress from '../../components/common/IAddress'
import { strTrim } from '@/utils/utilsMethods.js'

export default {
  components: {
    ISearch,
    IAddress
  },
  data () {
    return {
      loading: false,
      finished: true,
      isShowArea: false,
      chosenAddressId: '1',
      list: [
        {
          id: 0,
          title: '修改个人信息',
          to: 'userInfo'
        },
        {
          id: 1,
          title: '修改收货地址',
          to: ''
        }
      ],
    }
  },
  computed: {
    addressList () {
      return this.$store.state.user.userInfo.t_addresses
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
      this.$store.dispatch('setUserInfo', null)
    },
    onClickLeft () {
      this.$router.push('/me')
    },
    onCloseArea (v) {
      this.isShowArea = v
    },
    toUpdate (id) {
      if (id === 1) {
        this.isShowArea = true
      } else {
        this.$router.push({ name: 'settingInfo', params: { info: 'userInfo' } })
      }
    }
  }
}
</script>

<style>
</style>