<template>
  <div class="i-login">
    <div class="i-login-top-bar">
      <van-nav-bar
        title="登录"
        left-arrow
        @click-left="onClickLeft"
        right-text="完成"
        @click-right="onClickRight"
      />
    </div>
    <div class="i-login-logo">
      <van-image :src="logo" width="100" fit="cover"></van-image>
    </div>
    <div class="i-login-form">
      <i-form info="login" ref="iForm" @submitCb="submitCallback"></i-form>
    </div>
  </div>
</template>

<script>
import IForm from '@/components/common/IForm'
import { login } from '@/api/user/user.js'

export default {
  data () {
    return {
      logo: require('@/assets/image/logo.png')
    }
  },
  methods: {
    onClickLeft () {
      this.$router.replace('/')
    },
    onClickRight () {
      const info = this.$refs.iForm.onSubmit()
    },
    submitCallback (data) {
      login(data).then(res => {
        if (res.errCode === 0) {
          if (res.data.token) {
            localStorage.setItem('myToken', res.data.token)
            this.$router.push('/')
          }
        } else {
          this.$notify({ type: 'danger', message: res.message })
        }
      })
    }
  },
  components: {
    IForm
  }
}
</script>

<style>
</style>