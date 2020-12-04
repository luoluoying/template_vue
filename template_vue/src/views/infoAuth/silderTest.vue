<template>
  <div class="identity-page">
    <van-row>
      <van-col span="22" offset="1">
        <slider-path />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import SliderPath from '@/components/SliderPath.vue'

export default {
  name: 'Identity',
  data() {
    return {
    }
  },
  methods: {
    afterRead(file) {
      console.log(file)
    }
  },
  components: {
    SliderPath
  }
}
</script>

<style lang="scss" scoped>
.identity-page {
  margin-top: 20px;
}
</style>
