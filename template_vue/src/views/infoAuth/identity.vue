<template>
  <div class="identity-page">
    <van-row>
      <van-col>请拍摄并上传身份证照片</van-col>
      <van-col span="10">
        <van-uploader :after-read="afterRead" />
      </van-col>
      <van-col span="10" offset="1"></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'Identity',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped></style>
