<template>
<div class="detailBg">
  <div class="img-wrapper">
    <img :src="imgSrc" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailBg',
  props: {
    imgSrc: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.detailBg{
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
  img{
    position: absolute;
    min-width: 106%;
    min-height: 100%;
    width:auto;
    height:auto;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
  }
}
</style>
