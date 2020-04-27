<template>
  <div class="i-register">
    <div class="i-register-top-bar">
      <van-nav-bar
        title="注册"
        left-arrow
        @click-left="onClickLeft"
        right-text="完成"
        @click-right="onClickRight"
      />
    </div>
    <div class="i-register-form">
      <i-form info="register" ref="iForm" @submitCb="submitCallback"></i-form>
    </div>
  </div>
</template>

<script>
import IForm from '@/components/common/IForm'
import { register } from '@/api/user/user.js'

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
      if (data && data.picture) {
        data.picture = data.picture.join('')
      }
      register(data).then(res => {
        if (!res.errCode) {
          this.$router.push('/login')
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