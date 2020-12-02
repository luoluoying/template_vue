<template>
  <div class="identity-page">
    <van-row>
      <van-col><upload-id /></van-col>
    </van-row>
    <van-row class="tip">
      <van-col class="tip-col" offset="0" span="24">
        <span class="confirm-tip">请确认您的身份信息</span>
      </van-col>
    </van-row>
    <van-row>
      <van-col>
        <van-form ref="frontInfo">
          <van-field
            v-model="username"
            name="username"
            label="姓名"
            placeholder="请拍照识别姓名"
            :rules="[{ required: true, message: '请补充姓名' }]"
          />
          <van-field
            label="身份证号"
            v-model="idNumber"
            name="idNumber"
            placeholder="请拍照识别身份证号"
            :rules="[{ required: true, message: '请补充身份证号' }]"
          />
          <van-field
            label="民族"
            v-model="nation"
            name="nation"
            placeholder="请拍照识别民族"
            :rules="[{ required: true, message: '请补充民族' }]"
          />
          <van-field
            label="住址"
            v-model="address"
            name="address"
            placeholder="请拍照识别住址"
            :rules="[{ required: true, message: '请补充住址' }]"
          />
        </van-form>
      </van-col>
    </van-row>
    <div class="width-border"/>
    <van-row>
      <van-col>
        <van-form ref="backInfo">
          <van-field
            v-model="issuingAuthoriting"
            name="issuingAuthoriting"
            label="签发机关"
            placeholder="请拍照识别签发机关"
            :rules="[{ required: true, message: '请补充签发机关' }]"
          />
          <van-field
            label="签发日期"
            v-model="issuingData"
            name="issuingData"
            placeholder="请拍照识别签发日期"
            :rules="[{ required: true, message: '请补充签发日期' }]"
          />
          <van-field
            label="有效期"
            v-model="validity"
            name="validity"
            placeholder="请拍照识别有效期"
            :rules="[{ required: true, message: '请补充有效期' }]"
          />
        </van-form>
      </van-col>
    </van-row>
    <van-row class="confirm-btn">
      <van-col span="22" offset="1">
        <van-button v-on:click="submit" round block type="info">确认信息</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import UploadId from './uploadId'
import { validateArray } from '@/plugins/vantUtils'

export default {
  name: 'Identity',
  data() {
    return {
      username: '',
      idNumber: '',
      nation: '',
      address: '',
      issuingAuthoriting: '',
      issuingData: '',
      validity: ''
    }
  },
  methods: {
    afterRead(file) {
      console.log(file)
    },
    async submit() {
      const frontStatus = await validateArray(
        this.$refs.frontInfo
      )
      if (frontStatus) {
        const backStatus = await validateArray(
          this.$refs.backInfo
        )
        if (backStatus) {
          console.log('form ok')
        }
      }
    }
  },
  components: {
    UploadId
  }
}
</script>

<style lang="scss" scoped>
.identity-page {
  .tip {
    margin-top: 60px;
    .tip-col {
      background-color: #f8f8f8;
      padding: 5px;
      text-align: center;
    }
  }
  .width-border {
    background-color: #f8f8f8;
    height: 7px;
  }
  .confirm-btn {
    margin: 20px 0;
  }
}
</style>
