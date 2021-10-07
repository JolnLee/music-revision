<template>
  <div class="personalize">
    <div class="personalize-top">
      <h3>{{title}}</h3>
    </div>
    <div class="personalize-list">
      <div class="list-item" v-for="value in personalized" :key="value.id">
        <img v-lazy="value.picUrl" alt="">
        <p v-text="value.name"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personalized',
  props: {
    personalized: {
      type: Array,
      default: () => [],
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
.personalize{
  box-sizing: border-box;
  vertical-align:bottom;
  .personalize-top{
    width: 100%;
    height: 84px;
    line-height: 84px;
    @include bg_sub_color();
    padding: 0 27px;
    box-sizing: border-box;
    border-bottom: 2px solid #ccc;
    h3{
      @include font_size($font_large);
      font-weight: bold;
      @include font_color()
    }
  }
  .personalize-list{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @include bg_sub_color();
    .list-item{
      width: 200px;
      padding: 14px 0 ;
      img{
        width:200px;
        height: 200px;
        border-radius: 10px;
        margin-bottom: 12px;
      }
      p{
        @include clamp(2);
        @include font_size($font_samll);
        @include font_color();
      }
    }
  }
}
</style>
