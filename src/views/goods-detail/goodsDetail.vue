<template>
  <div class="i-goods-detail">
    <i-swipper :images="images"></i-swipper>
    <div>商品内容</div>
    <div>商品选择器</div>
    <div>评价内容</div>
    <div>商品的海报</div>
  </div>
</template>

<script>
import ISwipper from '../../components/common/ISwipper'

export default {
  components: {
    ISwipper
  },
  data () {
    return {
      images: [
        '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/92540/30/1199/142578/5dbadae0E0e17493e/63dd7b45f8e6f944.jpg!q80.dpg.webp',
        '//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/105898/34/1199/40347/5dbadae0E8a0fbd85/bf4afdd1ea0c12a8.jpg!q70.dpg.webp'
      ]
    }
  }
}
</script>
