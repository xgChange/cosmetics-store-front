<template>
  <div class="index">
    <i-input></i-input>
    <i-swipper></i-swipper>
    <i-grid></i-grid>
    <i-goods-grid>
      <div class="newProduct">
        <span>新品上架</span>
      </div>
    </i-goods-grid>
  </div>
</template>

<script>
import IInput from '../components/common/IInput'
import ISwipper from '../components/common/ISwipper'
import IGrid from '../components/common/IGrid'
import IGoodsGrid from '../components/common/iGoodsGrid'
export default {
  name: 'Index',
  components: {
    IInput,
    ISwipper,
    IGrid,
    IGoodsGrid
  }
}
</script>

<style lang="scss" scoped>
.index {
  max-height: 617px;
  overflow: auto;
  .newProduct {
    font-size: 16px;
    text-align: center;
    margin: 10px 0;
    color: #ff4422;
    font-weight: bolder;
  }
}
</style>
