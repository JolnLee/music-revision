<template>
  <div class="header" @click="changeTheme">
    <div class="header-left" @click.stop="backHome"></div>
    <div class="header-title">{{title}}</div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      index: 0,
      themeArray: ['theme', 'theme1', 'theme2']
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    changeTheme () {
      this.index++
      if (this.index >= this.themeArray.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themeArray[this.index])
    },
    backHome () {
      window.history.back()
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
.header{
  width: 100%;
  height: 100px;
  @include bg_color;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 999;
  .header-left , .header-right {
    width: 60px;
    height: 60px;
    margin-top: 20px;
  }
  .header-left{
    @include bg_img('../assets/images/back');
    margin-left: 18px;
  }
  .header-right{
    @include bg_img('../assets/images/more');
    margin-right: 18px;
  }
  .header-title{
    color: #fff;
    @include font_size($font_medium_s);
    line-height: 100px;
    text-align: center;
    font-weight: 600;
    @include no-wrap()
  }
}
</style>
