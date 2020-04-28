<template>
  <div class="i-address">
    <van-popup v-model="showArea" position="bottom" :style="{ height: '48%' }" @close="onClose">
      <van-address-list
        v-model="chosenAddressId"
        :list="addressList"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @click-item="selectItem"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    isShowArea: {
      type: Boolean
    },
    addressList: {
      type: Array
    }
  },
  data () {
    return {
      chosenAddressId: 1,
      showArea: this.isShowArea
    }
  },
  watch: {
    isShowArea (val) {
      this.showArea = val
    }
  },
  methods: {
    onAdd () {
      if (this.addressList && this.addressList.length >= 3) {
        this.$notify({ type: 'danger', message: '最多只能添加三个地址' })
        return
      }
      this.$router.push({ name: 'settingInfo', params: { info: 'address' }, query: { newAdd: true } })
    },
    onEdit (item, index) {
      this.$router.push({ name: 'settingInfo', params: { info: 'address' }, query: { addressId: item.id } })
    },
    onClose () {
      this.$emit('addressClose', this.showArea)
    },
    selectItem (val) {
      this.$emit('selectAddress', val)
    }
  }
}
</script>

<style>
</style>