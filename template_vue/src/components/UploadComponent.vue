<template>
  <div class="upload-component">
    <van-uploader
      v-model="fileList"
      :after-read="afterRead"
      :max-count="1"
    >
      <van-icon class="front_icon" name="add" size="50" color="#07c160" />
    </van-uploader>
  </div>
</template>

<script>
export default {
  name: 'UploadComponent',
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    afterRead(file) {
      console.log(file.file)
    }
  }
}
</script>
<style lang="scss" scoped>
.upload-component {
  background: url('../assets/id_front.png') no-repeat;
  height: 150px;
  width: 230px;
  // .front_icon {
  //   background: url('../assets/id_front.png') no-repeat;
  // }
}
</style>
