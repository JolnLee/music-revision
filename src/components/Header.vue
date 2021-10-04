<template>
  <div class="header" @click="changeTheme">
    <div class="header-left"></div>
    <div class="header-title">愚你音乐</div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      index: 0,
      themeArray: ['theme', 'theme1', 'theme2']
    }
  },
  methods: {
    changeTheme () {
      this.index++
      if (this.index >= this.themeArray.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themeArray[this.index])
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
.header{
  width: 100%;
  height: 100px;
  //background-color: #f00;
  @include bg_color;
  display: flex;
  justify-content: space-between;
  .header-left , .header-right {
    width: 84px;
    height: 84px;
    margin-top: 8px;
    //background-color: #fff;
  }
  .header-left{
    @include bg_img('../assets/images/logo');
    margin-left: 18px;
  }
  .header-right{
    @include bg_img('../assets/images/account');
    margin-right: 18px;
  }
  .header-title{
    color: #fff;
    @include font_size($font_medium);
    font-weight: 600;
    line-height: 100px;
    text-align: center;
  }
}
</style>
