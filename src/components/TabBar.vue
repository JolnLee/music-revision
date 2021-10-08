<template>
  <div class="tabBar">
    <router-link to="./recommend" class="item" tag="div">
      <span>推荐</span>
    </router-link>
    <router-link to="./singer" class="item" tag="div">
      <span>歌手</span>
    </router-link>
    <router-link to="./rank" class="item" tag="div">
      <span>排行</span>
    </router-link>
    <router-link to="./search" class="item" tag="div">
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
.tabBar{
  width: 100%;
  height: 84px;
  @include bg_sub_color();
  display: flex;
  justify-content: space-around;
  //position: relative;
  //z-index: 999;
  .item{
    height: 83px;
    box-sizing: border-box;
    border-bottom: 4px transparent solid;
    span{
      line-height: 83px;
      @include font_color();
      @include font_size($font_medium);
      font-weight: 600;
    }
    &.router-link-active{
      @include border_color();
      span{
        @include font_active_color();
      }
    }
  }
}
</style>
