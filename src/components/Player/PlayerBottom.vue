<template>
<div class="player-bottom">
  <div class="player-progress">
    <span>00:00</span>
    <div class="progress-bar">
      <div class="progress-line">
        <div class="progress-dot"></div>
      </div>
    </div>
    <span>00:00</span>
  </div>
  <div class="player-control">
    <div class="mode"></div>
    <div class="prev"></div>
    <div class="play"></div>
    <div class="next"></div>
    <div class="favor"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlayerBottom'
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
.player-bottom{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  @include font_color();
  .player-progress{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 84%;
    margin: 0 auto;
    .progress-bar{
      width: 69%;
      height: 8px;
      @include bg_sub_color();
      border-radius: 6px;
      .progress-line{
        width: 30%;
        height: 100%;
        @include player_background_color();
        position: relative;
        border-radius: 6px;
        .progress-dot{
          width: 15px;
          height: 15px;
          border-radius: 50%;
          @include player_background_color();
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .player-control{
    width: 75%;
    height: 230px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    div{
      width: 60px;
      height: 60px;
      background-size: cover;
    }
    .mode{
      @include bg_img('../../assets/images/loop')
    }
    .prev{
      @include bg_img('../../assets/images/prev')
    }
    .play{
      @include bg_img('../../assets/images/play');
      width: 110px;
      height: 110px;
    }
    .next{
      @include bg_img('../../assets/images/next')
    }
    .favor{
      @include bg_img('../../assets/images/favor')
    }
  }
}
</style>
