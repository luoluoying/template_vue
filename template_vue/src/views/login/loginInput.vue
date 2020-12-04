<template>
  <van-form class="login-input" @submit="onSubmit" ref="loginForm">
    <van-field
      v-model="loginTel"
      type="tel"
      name="loginTel"
      label="手机号"
      left-icon="phone-o"
      placeholder="请输入手机号"
      :rules="[
        {
          pattern: telPattern,
          required: true,
          message: '请填写正确的手机号'
        }
      ]"
    />
    <van-row>
      <van-col span="22" offset="1">
        <slider-path />
      </van-col>
    </van-row>
    <!--
    <van-field v-model="captcha" name="captcha" label="验证码" left-icon="/lechang/static/img/captchaIcon.3e3008b5.png" placeholder="请输入验证码" :rules="[{ required: true, message: '请填写验证码' }]">
      <template #extra>
        <img v-on:click="handleChangeCaptcha" v-bind:src="getCaptcha" />
      </template>
    </van-field>
    -->
    <van-field v-model="messageValidate" name="messageValidate" label="短信验证码" left-icon="/lechang/static/img/logo.0130240b.png" placeholder="请输入短信验证码" :rules="[{ required: true, message: '请填写短信验证码' }]">
      <template #extra>
        <span v-if="!countDown" v-on:click="sendMessage" native-type="button" size="small" type="primary"> 发送验证码 </span>
        <span v-if="countDown">重新发送({{ showTime }})s</span>
      </template>
    </van-field>
    <van-button class="submit-btn" round block type="primary" native-type="submit"> 登录/注册 </van-button>
    <img class="captcha-left" src="../../assets/captchaIcon.png" />
  </van-form>
</template>

<script>
import { Regular } from '@/utils/regular'
import { sendMessage } from '@/api/common.js'
import { validateArray } from '@/plugins/vantUtils'
import { getTimestamp } from '@/utils/toolfunc'
import SliderPath from '@/components/SliderPath.vue'

export default {
  name: 'LoginInput',
  data() {
    return {
      loginTel: '',
      captcha: '',
      countDown: false,
      showTime: 60,
      messageValidate: '',
      telPattern: Regular.TelNumber,
      getCaptcha: `/wx/captcha?codetype=1&timestamp=${localStorage.getItem('timeDefault')}`
    }
  },
  created() {
    this.setTimeDefault()
  },
  methods: {
    setTimeDefault() {
      localStorage.setItem('timeDefault', getTimestamp())
    },
    setTimer() {
      const that = this
      that.timer = setInterval(() => {
        if (that.showTime === 0) {
          this.countDown = false
          clearInterval(that.timer)
        } else {
          that.showTime -= 1
        }
      }, 1000)
    },
    onSubmit(values) {
      console.log(this.$store)
      console.log('submit', values)
      this.$router.push({ path: 'identity' })
    },
    handleChangeCaptcha() {
      this.setTimeDefault()
      this.getCaptcha = `/wx/captcha?codetype=1&timestamp=${localStorage.getItem('timeDefault')}`
    },
    async sendMessage() {
      // validate
      // console.log(this.$refs.loginForm)
      const status = await validateArray(this.$refs.loginForm, ['loginTel', 'captcha'])
      if (status) {
        this.countDown = true
        this.setTimer()
        sendMessage({
          mobile: this.loginTel,
          captcha: this.captcha,
          timestamp: localStorage.getItem('timeDefault'),
          type: 0
        })
          .then((res) => {
            console.table(res)
          })
          .catch((err) => {
            console.table(err)
          })
      }
    }
  },
  components: {
    SliderPath
  }
}
</script>
<style lang="scss" scoped>
.login-input {
  .captcha-left {
    display: none;
    height: 15px;
    width: 15px;
    position: absolute;
    top: 327px;
    left: 50px;
    z-index: 1;
  }
  .submit-btn {
    margin: 20px 0 0 0;
  }
}
</style>
