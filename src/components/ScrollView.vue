<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'ScrollView',
  mounted () {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true,
      scrollbars: true,
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true
    })
    const observer = new MutationObserver(() => {
      this.iscroll.refresh()
    })
    const config = {
      childList: true,
      subtree: true,
      attributesFilter: ['height', 'offsetHeight']
    }
    observer.observe(this.$refs.wrapper, config)
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  width: 100%;
  height: 100%;
}
</style>
