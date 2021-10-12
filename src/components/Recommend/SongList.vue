<template>
  <div class="song">
    <div class="song-top">
      <h3>最新音乐</h3>
    </div>
    <ul class="song-list">
      <li class="list-item" v-for="value in newSong" :key="value.id">
        <img v-lazy="value.song.album.picUrl" alt="">
        <div>
          <h4>{{value.name}}</h4>
          <p>{{value.song.artists[0].name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SongList',
  props: {
    newSong: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
.song {
  box-sizing: border-box;
  .song-top {
    width: 100%;
    height: 84px;
    line-height: 84px;
    @include bg_sub_color();
    padding: 0 27px;
    box-sizing: border-box;
    border-bottom: 2px solid #ccc;
    h3 {
      @include font_size($font_large);
      font-weight: bold;
      @include font_color()
    }
  }
  .song-list{
    width: 100%;
    @include bg_sub_color();
    padding: 10px 27px;
    box-sizing: border-box;
    .list-item{
      width: 100%;
      display: flex;
      padding: 12px 0;
      align-items: center;
      border-bottom: 2px solid transparent;
      @include border_color_sub();
      img{
        width: 150px;
        height: 150px;
        border-radius: 10px;
        margin-right: 24px;
      }
      div{
        h4{
          @include font_size($font_medium);
          @include font_color();
          margin-bottom: 9px;
        }
        p{
          @include font_size($font_samll);
          @include font_color();
          opacity: .7;
        }
      }
      &:last-of-type{
        border: none;
      }
    }
  }
}
</style>
