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
      <i-form info="register" ref="iForm" @submitCb="submitCallback" @uploadSuccess="uploadSuccess"></i-form>
    </div>
  </div>
</template>

<script>
import IForm from '@/components/common/IForm'
import { register } from '@/api/user/user.js'

export default {
  data () {
    return {
      logo: require('@/assets/image/logo.png'),
      avatar: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      const info = this.$refs.iForm.onSubmit()
    },
    uploadSuccess (d) {
      this.avatar = d
    },
    submitCallback (data) {
      if (data && data.picture) {
        data.picture = data.picture.join('')
      }
      data.picture = this.avatar
      console.log(data)
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