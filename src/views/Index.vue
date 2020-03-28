<template>
  <div class="index">
    <i-input></i-input>
    <i-swipper></i-swipper>
    <i-grid></i-grid>
  </div>
</template>

<script>
import IInput from '../components/common/IInput'
import ISwipper from '../components/common/ISwipper'
import IGrid from '../components/common/IGrid'
export default {
  name: 'Index',
  components: {
    IInput,
    ISwipper,
    IGrid
  }
}
</script>

<style lang="scss" scoped>
.index {
  max-height: 617px;
  overflow: auto;
}
</style>
