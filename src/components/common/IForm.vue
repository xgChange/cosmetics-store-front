<template>
  <div class="i-form">
    <van-form @submit="formSubmit" ref="vantForm">
      <div class="i-form-item-userInfo" v-if="info === 'userInfo'">
        <van-field name="avatar" input-align="center">
          <template #input>
            <van-uploader v-if="info === 'userInfo'">
              <van-image
                round
                width="3rem"
                height="3rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                fit="cover"
              />
            </van-uploader>
          </template>
        </van-field>
        <van-field
          v-model="formData.nickname"
          name="nickName"
          label="昵称"
          placeholder="昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
        />
        <van-field
          v-model="formData.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </div>
      <div class="i-form-item-address" v-if="info === 'address'">
        <van-field
          readonly
          clickable
          name="area"
          :value="formData.area"
          label="地区选择"
          :placeholder="formData.area ? '' : '请选择地址'"
          @click="showArea = true"
          :rules="[{ required: true, message: '请填写详细地址' }]"
        />
        <van-popup v-model="showArea" position="bottom">
          <van-area
            :area-list="areaList"
            @confirm="onConfirm"
            @cancel="showArea = false"
            :columns-placeholder="['请选择', '请选择', '请选择']"
          />
        </van-popup>
        <van-field
          v-model="formData.detailAddress"
          name="detailAddress"
          label="详细地址"
          placeholder="请输入详细地址"
          :rules="[{ required: true, message: '请填写详细地址' }]"
        />
      </div>
    </van-form>
  </div>
</template>

<script>
import areaList from '@/utils/area.js'
import { unique } from '@/utils/utilsMethods.js'

export default {
  props: {
    info: {
      type: String
    },
    query: {
      type: Object
    }
  },
  data () {
    return {
      showArea: false,
      areaList,
      formData: {
        nickname: '',
        password: '',
        area: '',
        detailAddress: ''
      }
    }
  },
  methods: {
    onSubmit (v) {
      this.$refs.vantForm.submit()
    },
    formSubmit (e) {
      console.log('form', e)
    },
    onConfirm (e) {
      let arr = e
      if (arr.every(item => item && item.code && item.name)) {
        let temp = unique(arr.map(item => item.name))
        this.formData.area = temp.join(' ')
        this.showArea = false
      } else {
        this.$notify({ type: 'danger', message: '请输入完整的地址' })
      }
    }
  }
}
</script>

<style>
</style>