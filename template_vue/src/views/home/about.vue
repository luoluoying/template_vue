<!-- home -->
<template>
  <div class="about-container">
    about me
  </div>
</template>

<script>
// 请求接口
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
  },
  methods: {
    // Action 通过 store.dispatch 方法触发
    doDispatch() {
      this.$store.dispatch('setUserName', 'myName')
    }
  }
}
</script>
<style lang="scss">
.about-container {
  /* 你的命名空间 */
  background: #fff;
  height: 100vh;
  box-sizing: border-box;
}
</style>
