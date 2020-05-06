<template>
  <div class="i-setting-info">
    <div class="i-cart-top-bar">
      <van-nav-bar
        title="修改资料"
        left-arrow
        @click-left="onClickLeft"
        right-text="完成"
        @click-right="onClickRight"
      />
    </div>
    <i-form
      :info="showInfo"
      :query="queryObj"
      ref="iForm"
      @submitCb="submitCallback"
      @uploadSuccess="uploadSuccess"
    ></i-form>
  </div>
</template>

<script>
import IForm from '@/components/common/IForm'
import { updateUserInfo, createAddressInfo, updateAddressInfo } from '@/api/user/user.js'
export default {
  data () {
    return {
      showInfo: '',
      avatar: ''

    }
  },
  beforeRouteEnter (to, from, next) {
    const { info } = to.params
    const { newAdd, addressId } = to.query
    next(vm => {
      vm.showInfo = info
      vm.query = to.query
    })
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      this.$refs.iForm.onSubmit()
    },
    uploadSuccess (d) {
      this.avatar = d

    },
    submitCallback (data) {
      if (this.showInfo === 'address') {
        const { address, receiver, receiverPhone } = data
        if (this.$route.query.newAdd) {
          createAddressInfo({ name: receiver, address: address, tel: receiverPhone }).then(res => {
            if (res.errCode === 0) {
              localStorage.removeItem('userInfo')
              this.$dialog.alert({
                message: '添加成功'
              }).then(() => {
                this.$router.go(-1)
              })
            }
          })
        } else if (this.$route.query.addressId) {
          const { addressId } = this.$route.query
          let id = parseInt(addressId)
          updateAddressInfo({ name: receiver, address: address, tel: receiverPhone, id }).then(res => {
            if (res.errCode === 0) {
              localStorage.removeItem('userInfo')
              this.$dialog.alert({
                message: '修改成功'
              }).then(() => {
                this.$router.go(-1)
              })
            }
          })
        }
      }
      if (this.showInfo === 'userInfo') {
        if (data && data.picture) {
          data.picture = data.picture.join('')
        }
        data.picture = this.avatar
        updateUserInfo(data).then(res => {
          if (res.errCode === 0) {
            localStorage.removeItem('userInfo')
            this.$dialog.alert({
              message: '修改成功'
            }).then(() => {
              this.$router.go(-1)
            })
          }
        })
      }

    }
  },
  computed: {
    queryObj () {
      const { id, nickname, phone, picture, t_addresses } = this.$store.state.user.userInfo
      return {
        id,
        nickname,
        phone,
        picture,
        t_addresses
      }
    }
  },
  components: {
    IForm
  }
}
</script>

<style>
</style>