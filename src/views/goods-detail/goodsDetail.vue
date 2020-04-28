<template>
  <div class="i-goods-detail">
    <van-sticky>
      <div class="i-goods-top-bar">
        <van-nav-bar :title="isShowComment ? '评价' : '商品详情'" left-arrow @click-left="onClickLeft" />
      </div>
    </van-sticky>

    <keep-alive>
      <component :is="isShowComment ? 'CommentList' : 'GoodsDetail'" @showComment="showComment"></component>
    </keep-alive>
  </div>
</template>

<script>
import ISwipper from '../../components/common/ISwipper'
import IAddress from '../../components/common/IAddress'
import CommentList from '../../components/comment/comment-list'
import GoodsDetail from '../../components/goods/goods-detail'

export default {
  components: {
    ISwipper,
    IAddress,
    CommentList,
    GoodsDetail
  },
  data () {
    return {
      images: [
        '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/92540/30/1199/142578/5dbadae0E0e17493e/63dd7b45f8e6f944.jpg!q80.dpg.webp',
        '//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/105898/34/1199/40347/5dbadae0E8a0fbd85/bf4afdd1ea0c12a8.jpg!q70.dpg.webp'
      ],
      isShowArea: false,
      addressInfo: '',
      isShowComment: false
    }
  },

  methods: {
    onClickLeft () {
      if (this.isShowComment) {
        this.isShowComment = false
      } else {
        this.$router.go(-1)
      }
    },
    showComment (v) {
      this.isShowComment = v
    },

  }
}
</script>
