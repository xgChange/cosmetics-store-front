<template>
  <div class="i-comment-content">
    <div class="i-comment-content-box">
      <div class="content-box-left avatar">
        <van-image :src="avatar" round></van-image>
      </div>
      <div class="content-box-right">
        <div class="box-right-top">
          <div class="username">向茂贤</div>
          <van-rate v-model="rate" readonly />
        </div>
        <div class="container">
          <div :class="[isOpen ? 'text' : 'priText']">{{text}}</div>
          <div class="readmore" v-show="readMore" @click="showReadMore">{{isOpen ? '更多' : '收起'}}</div>
          <van-image :src="avatar" width="130"></van-image>
        </div>
        <span class="time">2020.4.20</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avatar: require('@/assets/image/default.png'),
      readMore: false,
      isOpen: true, // 控制显示 '更多' 和 '收起'
      text: '这是一，d多所阿萨德气德sad撒多撒气温达山阿斯顿撒多撒多撒多撒奥术大师阿斯顿撒多撒多撒多撒奥术大师阿斯顿撒多撒多撒多撒奥术大师阿斯顿撒多撒多撒多撒奥术大师多撒大所多地d多所阿萨阿萨德啊阿萨德气德气温达山地dsadasd这是一些文奥术大师多群字内d这是一些文奥术大师多群字内d这是一些文奥术大d',
      rate: 3
    }
  },
  props: {
    info: {
      type: Object
    }
  },
  mounted () {
    this.handleHeight()
  },
  methods: {
    handleHeight () {
      let text = document.querySelector('.text')
      let clientHeight = text.clientHeight
      let scrollHeight = text.scrollHeight
      this.readMore = scrollHeight > clientHeight ? true : false
    },
    showReadMore () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>
</style>