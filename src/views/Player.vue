<template>
  <div class="player">
    <PlayerHeader></PlayerHeader>
    <PlayerMiddle></PlayerMiddle>
    <PlayerBottom></PlayerBottom>
    <img src="https://t.hk.uy/agSt" alt="">
  </div>
</template>

<script>
import PlayerHeader from '@/components/Player/PlayerHeader'
import PlayerMiddle from '@/components/Player/PlayerMiddle'
import PlayerBottom from '@/components/Player/PlayerBottom'
export default {
  name: 'Player',
  components: {
    PlayerHeader,
    PlayerMiddle,
    PlayerBottom
  }
}
</script>

<style scoped lang="scss">
.player{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  &>img{
    width: auto;
    height: 100%;
    filter: brightness(9%);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
