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

    <i-address :isShowArea="isShowArea" :addressList="addressList" @addressClose="onCloseArea"></i-address>
  </div>
</template>

<script>
import ISearch from '../../components/common/iSearch'
import IAddress from '../../components/common/IAddress'

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
      addressList: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
    }
  },
  methods: {
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