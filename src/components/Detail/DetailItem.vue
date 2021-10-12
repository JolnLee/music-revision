<template>
  <ul class="detail-item">
    <li class="item-top">
      <div class="itemTop-icon"></div>
      <div class="itemTop-iDes">播放全部</div>
    </li>
    <li v-for="(value,i) in playlist" :key="value.id" class="itemList">
      <div class="itemList">
        <span>{{i+1}}</span>
        <div>
          <h5>{{value.name}}</h5>
          <p>{{value.al.name}} - {{value.ar[0].name}}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DetailItem',
  props: {
    playlist: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
.detail-item{
  width: 100%;
  min-height: 200px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  overflow: hidden;
  padding: 0 27px;
  box-sizing: border-box;
  @include bg_sub_color();
  li{
    width: 100%;
    height: 100px;
    display: flex;
    @include font_color();
    border-bottom: 1px solid transparent;
    @include border_color_sub();
    @include no-wrap();
    &.item-top{
      border-bottom: 3px solid #ccc;
      line-height: 100px;
    }
    .itemTop-icon{
      width: 54px;
      height: 54px;
      margin-top: 23px;
      @include bg_img('../../assets/images/small_play');
      background-repeat: no-repeat;
      background-size: cover;
      margin-right: 18px;
    }
    .itemTop-iDes{
      @include font_size($font_medium);
      font-weight: 600;
    }
    .itemList{
      display: flex;
      height: 100%;
      span{
        line-height: 100px;
        @include font_active_color();
        @include font_size($font_large);
        font-weight: 600;
        margin-right: 30px;
      }
      h5{
        margin-top: 20px;
        @include font_size($font_medium);
        @include font_color();
      }
      p{
        margin-top: 3px;
        @include font_size($font_samll);
        @include font_color();
        opacity: .6;
      }
    }
  }
}

</style>
