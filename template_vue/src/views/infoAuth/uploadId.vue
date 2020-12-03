<template>
  <div class="upload-id">
    <van-row>
      <van-col class="tips" span="24">请拍摄并上传身份证照片</van-col>
      <van-col span="4" offset="0">
        <img class="id_front" src="@/assets/id_front.png"/>
        <van-uploader
          v-model="frontFileList"
          class="front_upload"
          :after-read="afterRead"
          :before-read="beforeRead"
        >
          <van-icon class="front_icon" name="add" size="50" color="#07c160" />
        </van-uploader>
        <span class="front-tip">上传身份证正面照</span>
      </van-col>
      <van-col span="4" offset="8">
        <img class="id_back" src="@/assets/id_back.png"/>
        <van-uploader class="bank_upload" :after-read="afterRead">
          <van-icon name="add" size="50" color="#07c160" />
        </van-uploader>
        <span class="back-tip">上传身份证反面照</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Upload } from '@/api/common'
import lrz from 'lrz'

export default {
  name: 'UploadId',
  data() {
    return {
      frontFileList: []
    }
  },
  methods: {
    afterRead(file) {
      const formData = new FormData()
      lrz(file.file, {
        quality: 0.7 // default 太低不清晰可能导致无法识别
      })
        .then((res) => {
          formData.append('file', res.file, 'a')
          formData.append('phototype', 0)
          Upload(formData)
            .then((res) => {
              console.log(res)
            })
            .catch((err) => {
              console.log(err)
            })
        })
        .catch((err) => {
          console.log(err, 'compress err')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-id {
  .tips {
    color: black;
    font-size: 18px;
    margin: 10px 0px 10px 5px;
  }
  .id_front {
    height: 160px;
    width: 180px;
    position: absolute;
  }
  .front_upload {
    margin: 35px 0 0 60px;
  }
  .front-tip {
    position: absolute;
    left: 30px;
    top: 170px;
  }
  .id_back {
    height: 160px;
    width: 180px;
    position: absolute;
  }
  .bank_upload {
    margin: 35px 0 0 60px;
  }
  .back-tip {
    position: absolute;
    right: 43px;
    top: 170px;
  }
}
</style>
