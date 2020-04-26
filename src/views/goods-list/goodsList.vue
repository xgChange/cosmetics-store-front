<template>
  <div class="i-goods-List">
    <i-search>
      <van-icon name="arrow-left" size="25" />
    </i-search>
    <i-goods-grid></i-goods-grid>
  </div>
</template>

<script>
import ISearch from '../../components/common/iSearch'
import IGoodsGrid from '../../components/common/iGoodsGrid'

export default {
  components: {
    ISearch,
    IGoodsGrid
  }
}
</script>