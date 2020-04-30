<template>
  <div class="i-comment-content">
    <div class="i-comment-content-box">
      <div class="content-box-left avatar">
        <van-image
          :src="
            item.t_blog.t_user.picture ? item.t_blog.t_user.picture : avatar
          "
          round
        ></van-image>
      </div>
      <div class="content-box-right">
        <div class="box-right-top">
          <div class="username">{{ item.t_blog.t_user.nickname }}</div>
          <van-rate v-model="item.grade" readonly />
        </div>
        <div class="container">
          <div :class="[isOpen ? 'text' : 'priText']">
            {{ item.t_blog.content }}
          </div>
          <div class="readmore" v-show="readMore" @click="showReadMore">
            {{ isOpen ? '更多' : '收起' }}
          </div>
          <van-image
            v-if="item.t_blog.picture"
            :src="item.t_blog.picture"
            width="130"
          ></van-image>
        </div>
        <span class="time">{{ formateTime(item.t_blog.createdAt) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { timeFormat } from '../../utils/utilsMethods'

export default {
  data() {
    return {
      avatar: require('@/assets/image/default.png'),
      readMore: false,
      isOpen: true, // 控制显示 '更多' 和 '收起'
    }
  },
  props: {
    info: {
      type: Object,
    },
    item: {
      type: Object,
    },
  },
  mounted() {
    this.handleHeight()
    console.log(this.item)
  },
  methods: {
    handleHeight() {
      let text = document.querySelector('.text')
      let clientHeight = text.clientHeight
      let scrollHeight = text.scrollHeight
      this.readMore = scrollHeight > clientHeight ? true : false
    },
    showReadMore() {
      this.isOpen = !this.isOpen
    },
    formateTime(str) {
      return timeFormat(str)
    },
  },
}
</script>

<style></style>
