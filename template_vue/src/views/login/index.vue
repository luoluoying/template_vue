<template>
  <div class="login-page">
    <van-row class="content" type="flex" justify="center">
      <van-col>
        <div class="login-img"></div>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="22">
        <login-input />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import LoginInput from './loginInput'
import loginInput from './loginInput.vue'

export default {
  components: { loginInput },
  data() {
    return {
      loginTel: '',
      captcha: ''
    }
  },
  created() {
    console.log('created')
  },
  methods: {
    handleLogin() {
      console.log('login')
    }
  },
  comments: {
    LoginInput
  }
}
</script>

<style lang="scss">
.login-page {
  color: cadetblue;
  .content {
    margin: 70px 0 0 0;
  }
  .login-img {
    height: 200px;
    width: 140px;
    background: url('../../assets/logo.png') no-repeat;
  }
}
</style>
