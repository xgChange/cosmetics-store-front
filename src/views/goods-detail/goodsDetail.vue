<template>
  <div class="i-goods-detail">
    <i-swipper :images="images"></i-swipper>
    <div class="i-goods-detail-intro-box">
      <div class="intro-box-top">
        <div class="intro-box-top-price">
          <span class="flag">￥</span>
          <span class="price">255</span>
        </div>
        <van-icon name="like-o" size="20"></van-icon>
      </div>
      <div class="intro-box-content">
        <h1
          class="title"
        >Redmi 8A 5000mAh大电量 大字体大音量大内存 骁龙八核处理器 AI人脸解锁 莱茵护眼全面屏 4GB+64GB 耀夜黑 游戏智能老人手机 小米 红米</h1>
        <div class="remark">【品质好物】5000mAh大电量,支持18W快充,Type-C充电接口！【RedmiK30pro火热抢购中】</div>
      </div>
    </div>
    <div class="i-goods-detail-choose-box">
      <van-cell-group>
        <van-cell is-link class="location" @click="switchLocation">
          <template #title>
            <span>地址</span>
            <van-icon name="location-o" size="16"></van-icon>
            <span class="location-text">广东省</span>
          </template>
        </van-cell>

        <van-cell is-link class="choose">
          <template #title>
            <span>选择</span>
            <span class="choose-text">选择商品规格</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="i-goods-detail-comment-box">
      <div class="title">
        <div class="title-left">
          <span class="text">评价</span>
          <span class="remark">500+</span>
        </div>
        <span class="title-right">好评度97%</span>
      </div>
      <div class="comment-box">下面这是评论的内容</div>
    </div>
    <div class="i-goods-detail-goodsImages-box">
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
    </div>

    <van-popup v-model="isShowArea" position="bottom" :style="{ height: '40%' }">
      <van-area
        @cancel="cancel"
        @confirm="confirm"
        :area-list="areaList"
        :columns-placeholder="['请选择', '请选择', '请选择']"
        title="标题"
      />
    </van-popup>
  </div>
</template>

<script>
import ISwipper from '../../components/common/ISwipper'
import areaList from '../../utils/area'

export default {
  components: {
    ISwipper
  },
  data () {
    return {
      images: [
        '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/92540/30/1199/142578/5dbadae0E0e17493e/63dd7b45f8e6f944.jpg!q80.dpg.webp',
        '//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/105898/34/1199/40347/5dbadae0E8a0fbd85/bf4afdd1ea0c12a8.jpg!q70.dpg.webp'
      ],
      areaList,
      isShowArea: false,
    }
  },
  methods: {
    switchLocation () {
      this.isShowArea = true
    },
    cancel () {
      this.isShowArea = false
    },
    confirm (e) {
      let arr = e
      if (arr.every(item => item && item.code && item.name)) {
        this.isShowArea = false
        let temp = arr.map(item => {
          return item.name
        })
        console.log(temp)
      } else {
        this.$notify({ type: 'danger', message: '请输入完整的地址' })
      }
    }
  }
}
</script>
