<template>
  <div class="i-grid">
    <van-grid :border="false" :column-num="4">
      <van-grid-item
        class="i-grid-item"
        v-for="(item, index) in cosIconName"
        :key="index"
      >
        <van-icon
          class-prefix="my-icon"
          :name="item.name"
          size="30"
          :color="item.color"
        ></van-icon>
        <span class="i-grid-item-text">{{ item.text }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { cosIconName } from '../../utils/handleIconClass'
export default {
  data() {
    return {
      cosIconName: []
    }
  },
  created() {
    this.handleIconName()
  },
  methods: {
    handleIconName() {
      this.cosIconName = cosIconName
    }
  }
}
</script>

<style lang="scss" scoped></style>
