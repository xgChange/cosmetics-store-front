<template>
  <div class="i-category">
    <div class="i-category-search">
      <i-search go="category">
        <div class="i-category-search-left">商品分类</div>
      </i-search>
    </div>
    <div class="i-category-tab">
      <div class="i-category-slidebar">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item v-for="item in categoryNames" :title="item.name" :key="item.id" />
        </van-sidebar>
      </div>

      <div class="i-category-content">
        <keep-alive>
          <router-view :secondCategory="secondCategory"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import ISearch from '../../components/common/iSearch'
import { getGoodsCategoryAll } from '../../api/goods/goods'

export default {
  data () {
    return {
      activeKey: 0,
      categoryNames: [],
      secondCategory: [],
    }
  },
  created () {
    // 获取分类
    this.initCategory()
  },
  methods: {
    onChange (index) {
      this.$router.push({
        path: '/category/tabs',
        query: {
          title: this.categoryNames[index].id,
        },
      })
      this.secondCategory = this.categoryNames[index].children
    },
    initCategory () {
      getGoodsCategoryAll().then((res) => {
        const { data } = res
        this.categoryNames = data.categoryNames
        let title = parseInt(this.$route.query.title)
        this.secondCategory = data.categoryNames.find(item => item.id === title).children
      })
    },
  },
  components: {
    ISearch,
  },
}
</script>
