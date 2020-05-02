<template>
  <div class="i-comment-content">
    <div class="i-comment-content-box">
      <div class="content-box-left avatar">
        <van-image :src="user.picture ? user.picture : avatar" round></van-image>
      </div>
      <div class="content-box-right">
        <div class="box-right-top">
          <div class="username">{{ user.nickname }}</div>
          <van-rate v-model="grade" readonly v-if="grade" />
        </div>
        <div class="container">
          <div :class="[isOpen ? 'text' : 'priText']">{{ blog.content }}</div>
          <div class="readmore" v-show="readMore" @click="showReadMore">{{ isOpen ? '更多' : '收起' }}</div>
          <van-image v-if="blog.picture" :src=" blog.picture" width="130"></van-image>
        </div>
        <div class="bottom-box">
          <span class="time">{{ formateTime(blog.createdAt) }}</span>
          <span class="tocomment" v-show="!isReviews">
            <van-icon
              name="chat-o"
              color="#1989fa"
              size="18px"
              @click="toComment({subject_id: blog.id, to_id: user.id})"
            />
          </span>
        </div>

        <div class="showComment" v-if="isShowComment" @click="showComment(blog.id)">查看评论</div>
        <div class="comment-box" v-if="replies && replies.length > 0">
          <div v-for="item in replies" :key="item.id" @click="toReply(item)">
            <span
              class="comment-name"
            >{{item.from_user.nickname}}：{{item.type === 1 ? '' : `回复@${item.to_user.nickname}`}}:</span>
            {{item.content}}
          </div>
        </div>
      </div>
    </div>
    <van-dialog v-model="showDialog" title="请输入内容" show-cancel-button @confirm="replyConfirm">
      <van-field v-model="contentValue" placeholder="请输入内容" />
    </van-dialog>
  </div>
</template>

<script>
import { timeFormat } from '../../utils/utilsMethods'
import { createReply, createComment, getComment } from '../../api/blogs/blogs'

export default {
  name: 'CommentContent',
  data () {
    return {
      avatar: require('@/assets/image/default.png'),
      readMore: false,
      isOpen: true, // 控制显示 '更多' 和 '收起'
      showPopup: false,
      showDialog: false,
      contentValue: '',
      toReplyObj: {},
      isReply: false
    }
  },
  props: {
    isReviews: {
      type: Boolean,
      default: false
    },
    user: {
      type: Object,
      default () {
        return null
      },
    },
    replies: {
      type: Array,
      default () {
        return []
      }
    },
    blog: {
      type: Object,
      default () {
        return null
      },
    },
    grade: {
      type: Number,
      default: 0,
    },
    isShowComment: {
      type: Boolean,
      default: false,
    },
  },
  mounted () {
    this.handleHeight()
  },
  methods: {
    showComment (id) {
      this.$router.push({ name: 'blogDetail', params: { id } })
    },
    toReply (item) {
      this.showDialog = true
      this.obj = {
        to_id: item.from_user.id,
        type: 2,
        comment_id: this.blog.id,
      }
      this.isReply = true
    },
    toComment ({ subject_id, to_id }) {
      this.showDialog = true
      this.obj = {
        subject_id,
        type: 1,
        to_id,
        comment_id: subject_id
      }
      this.isReply = false
    },
    replyConfirm () {
      this.obj.content = this.contentValue
      if (!this.contentValue) {
        this.$toast.fail('不能为空')
        return
      }

      if (!this.isReply) {
        if (!this.obj.to_id) {
          // console.log(this.obj, createComment)
          createComment(this.obj).then(res => {
            if (res.errCode === 0) {
              this.$toast.success({ message: '评论成功!' })
              // return
            }
          })
        }
      }
      createReply(this.obj).then(res => {
        if (res.errCode === 0) {
          this.$toast.success({ message: '评论成功!' })
          this.$router.go(-1)
        }
      })
    },
    handleHeight () {
      if (!document.querySelector('.text')) {
        return
      }
      let text = document.querySelector('.text')

      let clientHeight = text.clientHeight
      let scrollHeight = text.scrollHeight
      this.readMore = scrollHeight > clientHeight ? true : false
    },
    showReadMore () {
      this.isOpen = !this.isOpen
    },
    formateTime (str) {
      return timeFormat(str)
    },
  },
}
</script>

<style></style>
