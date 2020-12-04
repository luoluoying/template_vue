<template>
  <van-row class="upload-component">
    <van-col span="24" v-on:click.stop.prevent>
      <van-slider
        class="slider-custom"
        ref="sliderRef"
        v-model="value"
        :max="max"
        :disabled="disabled"
        @input="inputChange"
        @change="onChange"
        @drag-end="end"
        bar-height="40px"
      >
        <template #button>
          <!-- <span class="slider-plac">向右滑动完成验证</span> -->
          <img :class="[course, startClass, endClass]" src="../assets/bxs_right_arrow.svg"/>
        </template>
      </van-slider>
      <span :class="[sliderPlac, sliderSucc]">
        {{ disabled ? '验证完成' : '向右滑动完成验证'}}
      </span>
    </van-col>
  </van-row>
</template>

<script>
export default {
  name: 'SliderPath',
  data() {
    return {
      course: 'course',
      startClass: 'start',
      endClass: '', // end
      sliderPlac: 'slider-plac',
      sliderSucc: '', // slider-succ
      value: 0,
      max: 100,
      Xdata: [],
      disabled: false
    }
  },
  methods: {
    resetClass() {
      this.startClass = 'start'
      this.endClass = ''
      this.sliderPlac = 'slider-plac'
      this.sliderSucc = ''
    },
    setEndClass() {
      this.startClass = ''
      this.endClass = 'end'
      this.sliderPlac = ''
      this.sliderSucc = 'slider-succ'
    },
    onChange(value) {
      console.log(value, 'onchange')
      if (value !== this.max) {
        this.resetClass()
        this.value = 0
        this.Xdata = []
      }
    },
    inputChange(value) {
      if (value >= 100) {
        // this.setEndClass()
      }
      this.Xdata.push(this.$refs.sliderRef.offsetX)
    },
    end() {
      if (this.value === this.max) {
        console.log('end')
        if (Math.random() > 0.5) {
          // 校验成功
          this.disabled = true
          this.setEndClass()
        } else {
          // 失败
          this.value = 0
          this.resetClass()
        }
        // this.setEndClass()
      } else if (this.Xdata.length < 10) {
        this.value = 0
      } else {
        this.value = 0
      }
      this.Xdata = []
    }
  }
}
</script>
<style lang="scss" scoped>
.upload-component {
  position: relative;
  .slider-custom {
    border-radius: 0;
    .van-slider__button-wrapper {
      right: 20px;
    }
  }
  .slider-plac {
    color: #bfbfbf;
    font-size: 20px;
    position: absolute;
    width: 245px;
    top: 4px;
    left: 64px;
  }
  .slider-succ {
    color: #515151;
    font-size: 20px;
    position: absolute;
    width: 130px;
    top: 4px;
    left: 74px;
  }
  .course {
    height: 40px;
    width: 40px;
  }
  .start {
    margin-left: 35px;
    margin-top: 4px;
  }
  .end {
    position: absolute;
    right: -4px;
    top: -20px;
  }
}
</style>
