<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-title">
      <h4>演员</h4>
      <p>薛之谦</p>
    </div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'PlayerHeader',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
.header{
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 999;
  .header-left , .header-right {
    width: 70px;
    height: 70px;
    margin-top: 30px;
  }
  .header-left{
    @include bg_img('../../assets/images/down');
    margin-left: 18px;
  }
  .header-right{
    @include bg_img('../../assets/images/more');
    margin-right: 18px;
  }
  .header-title{
    color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @include no-wrap();
    padding: 10px 0;
    h4{
      @include font_size($font_medium);
    }
    p{
      @include font_size($font_samll);
      margin-top: 16px;
      opacity: .8;
    }
  }
}
</style>
