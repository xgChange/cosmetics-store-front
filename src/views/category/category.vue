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
          <van-sidebar-item
            v-for="item in categoryNames"
            :title="item.name"
            :key="item.id"
          />
        </van-sidebar>
      </div>

      <div class="i-category-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import ISearch from '../../components/common/iSearch'
import { getGoodsCategoryAll } from '../../api/goods/goods'

export default {
  data() {
    return {
      activeKey: 0,
      categoryNames: [],
    }
  },
  created() {
    // 获取分类
    this.initCategory()
  },
  methods: {
    onChange(index) {
      this.$router.push({
        path: '/category/tabs',
        query: {
          title: this.categoryNames[index].id,
        },
      })
    },
    initCategory() {
      getGoodsCategoryAll().then((res) => {
        const { data } = res
        this.categoryNames = data.categoryNames
      })
    },
  },
  components: {
    ISearch,
  },
}
</script>
