<template>
  <div class="i-form">
    <van-form @submit="formSubmit" ref="vantForm">
      <div
        class="i-form-item-userInfo"
        v-if="info === 'userInfo' || info === 'register' || info === 'login'"
      >
        <van-field
          name="picture"
          input-align="center"
          v-model="formData.picture"
          v-if="info === 'userInfo' || info === 'register'"
        >
          <template #input>
            <van-uploader :after-read="afterRead">
              <van-image round width="3rem" height="3rem" fit="cover" :src="formData.picture" />
            </van-uploader>
          </template>
        </van-field>
        <van-field
          v-if="info === 'register' || info === 'login'"
          v-model="formData.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-if="info === 'register' || info === 'userInfo'"
          v-model="formData.nickname"
          name="nickname"
          label="昵称"
          placeholder="昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
        />
        <van-field
          v-if="info === 'register' || info === 'login'"
          v-model="formData.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }, {validator: validate('password'), message: '密码至少6位'}]"
        />
        <van-field
          v-if="info === 'register'"
          v-model="formData.newpassword"
          type="password"
          name="password"
          label="密码"
          placeholder="再输入一次密码"
          :rules="[{ required: true, message: '请填写密码' }, {validator: validate('newpassword'), message: '两次密码不一致'}]"
        />
        <van-field
          v-if="info === 'register' || info === 'userInfo'"
          v-model="formData.phone"
          name="phone"
          label="手机"
          placeholder="手机号码"
          maxlength="11"
          :rules="[{ required: true, message: '请填写手机号码' }, {validator: validate('phone'), message: '请输入正确的手机号码'}]"
        />
      </div>
      <div class="i-form-item-address" v-if="info === 'address'">
        <van-field
          v-model="formData.receiver"
          name="receiver"
          label="收件人"
          placeholder="收件人"
          :rules="[{ required: true, message: '收件人名字' }]"
        />
        <van-field
          v-model="formData.receiverPhone"
          name="receiverPhone"
          label="手机"
          placeholder="收件人的手机号码"
          maxlength="11"
          :rules="[{ required: true, message: '请填写收件人的手机号码' }, {validator: validate('phone'), message: '请输入正确的手机号码'}]"
        />
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
      <div class="i-form-item-publish" v-if="info === 'publish'">
        <van-field
          v-model="formData.commentMsg"
          rows="2"
          name="comment"
          autosize
          :label="key === 'blog' ? '内容' : '评论'"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
          :rules="[{ required: true, message: '请填写内容' }]"
        />
        <van-field name="picture" input-align="left" v-model="formData.picture">
          <template #input>
            <van-uploader :after-read="afterRead">
              <van-image width="3rem" height="3rem" fit="cover" :src="formData.picture" />
            </van-uploader>
          </template>
        </van-field>

        <van-field name="rate" label="评分" v-if="key !== 'blog'">
          <template #input>
            <van-rate v-model="formData.rate" />
          </template>
        </van-field>
      </div>
    </van-form>
  </div>
</template>

<script>
import areaList from '@/utils/area.js'
import { unique, strTrim } from '@/utils/utilsMethods.js'
import { uploadePicture } from '../../api/user/user'
import { prefixServer } from '../../config/constKey'

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
      key: '',
      showArea: false,
      areaList,
      oldUserInfo: {},
      formData: {
        nickname: '',
        password: '',
        area: '',
        detailAddress: '',
        commentMsg: '',
        rate: 0,
        username: '',
        newpassword: '',
        phone: '',
        receiver: '',
        receiverPhone: '',
        picture: ''
      }
    }
  },
  methods: {
    afterRead (file) {
      var formData = new FormData()
      formData.append('file', file.file)
      uploadePicture(formData).then(res => {
        if (res.errCode === 0) {
          this.formData.picture = prefixServer + res.data.url
          this.$emit('uploadSuccess', this.formData.picture)
        }
      })
    },
    onSubmit (v) {
      this.$refs.vantForm.submit()
    },
    formSubmit (e) {
      if (e.picture) {
        e.picture = e.picture.join(';')
      }
      if (e.area && e.detailAddress) {
        e.address = strTrim(`${e.area}${e.detailAddress}`)
      }
      this.$emit('submitCb', e)
    },
    validate (p) {
      return (c) => {
        if (p === 'phone') {
          return /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(c)
        }
        if (p === 'password') {
          return c.length >= 6 ? true : false
        }
        if (p === 'newpassword') {
          return c.length >= 6 && c === this.formData.password ? true : false
        }
      }
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
    },
    mergeFormData (o1, o2) {
      return Object.assign(o1, o2)
    }
  },
  created () {
    let { key } = this.$route.query
    this.key = key
    this.formData = this.mergeFormData(this.formData, this.query)
  },
  watch: {
    query (v) {
      this.formData = this.mergeFormData(this.formData, v)
    }
  }
}
</script>

<style>
</style>