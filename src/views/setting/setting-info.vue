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
    <i-form :info="showInfo" :query="query" ref="iForm"></i-form>
  </div>
</template>

<script>
import IForm from '@/components/common/IForm'
export default {
  data () {
    return {
      showInfo: '',
      query: {}
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
    }
  },
  components: {
    IForm
  }
}
</script>

<style>
</style>