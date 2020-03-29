<template>
  <div class="i-category">
    <div class="i-category-slidebar">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item v-for="(item, index) in categoryName" :title="item" :key="index" />
      </van-sidebar>
    </div>

    <div class="i-category-content">
      <router-view :s="activeKey"></router-view>
    </div>
  </div>
</template>

<script> 
export default {
  data () {
    return {
      activeKey: 0,
      categoryName: ['热门推荐', '新品上架', '梦幻唇妆', '温和净卸', '魅力眉眼', '口碑面膜', '心机底妆', '完趣甲油', '美容护肤']
    }
  },
  created () {

  },
  methods: {
    onChange (index) {
      // console.log(this.$router)
      this.$router.push({
        path: '/category/tabs',
        query: {
          title: index
        }
      })
    }
  }
}
</script>

