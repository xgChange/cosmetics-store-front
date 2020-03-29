<template>
  <div class="i-category">
    <div class="i-category-search">
      <i-search>
        <div class="i-category-search-left">商品分类</div>
      </i-search>
    </div>
    <div class="i-category-tab">
      <div class="i-category-slidebar">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item v-for="(item, index) in categoryName" :title="item" :key="index" />
        </van-sidebar>
      </div>

      <div class="i-category-content">
        <keep-alive>
          <router-view :s="activeKey"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script> 
import ISearch from '../../components/common/iSearch'
export default {
  data () {
    return {
      activeKey: 0,
      categoryName: ['热门推荐', '新品上架', '梦幻唇妆', '温和净卸', '魅力眉眼', '口碑面膜', '心机底妆', '完趣甲油', '美容护肤']
    }
  },
  created () {
    // 重新设置activeKey
    this.refreshKey()
  },
  methods: {
    onChange (index) {
      this.$router.push({
        path: '/category/tabs',
        query: {
          title: index
        }
      })
    },
    refreshKey () {
      let title = parseInt(this.$route.query.title)
      if (title <= this.categoryName.length - 1) {
        this.activeKey = title
      } else {
        this.$router.replace('/404')
      }
    }
  },
  components: {
    ISearch
  }
}
</script>

