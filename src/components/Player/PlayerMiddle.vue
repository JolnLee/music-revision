<template>
  <swiper :options="swiperOption" class="player-middle">
    <!-- slides -->
    <swiper-slide class="item">
      <div class="cd-wrapper">
        <img src="https://t.hk.uy/agSt" alt="">
      </div>
      <p>简单点 说话的方式简单点</p>
    </swiper-slide>
    <swiper-slide class="item lyric-wrapper">
      <ScrollView>
        <ul class="lyric-list">
          <li>我是歌词, 第1行的歌词,测试</li>
          <li>我是歌词, 第2行的歌词,测试</li>
          <li>我是歌词, 第3行的歌词,测试</li>
          <li>我是歌词, 第4行的歌词,测试</li>
          <li>我是歌词, 第5行的歌词,测试</li>
          <li>我是歌词, 第6行的歌词,测试</li>
          <li>我是歌词, 第7行的歌词,测试</li>
          <li>我是歌词, 第8行的歌词,测试</li>
          <li>我是歌词, 第9行的歌词,测试</li>
          <li>我是歌词, 第10行的歌词,测试</li>
          <li>我是歌词, 第11行的歌词,测试</li>
          <li>我是歌词, 第12行的歌词,测试</li>
          <li>我是歌词, 第13行的歌词,测试</li>
          <li>我是歌词, 第14行的歌词,测试</li>
          <li>我是歌词, 第15行的歌词,测试</li>
          <li>我是歌词, 第16行的歌词,测试</li>
          <li>我是歌词, 第17行的歌词,测试</li>
          <li>我是歌词, 第18行的歌词,测试</li>
          <li>我是歌词, 第19行的歌词,测试</li>
          <li>我是歌词, 第20行的歌词,测试</li>
          <li>我是歌词, 第21行的歌词,测试</li>
          <li>我是歌词, 第22行的歌词,测试</li>
          <li>我是歌词, 第23行的歌词,测试</li>
          <li>我是歌词, 第24行的歌词,测试</li>
          <li>我是歌词, 第25行的歌词,测试</li>
          <li>我是歌词, 第26行的歌词,测试</li>
          <li>我是歌词, 第27行的歌词,测试</li>
          <li>我是歌词, 第28行的歌词,测试</li>
          <li>我是歌词, 第29行的歌词,测试</li>
          <li>我是歌词, 第30行的歌词,测试</li>
          <li>我是歌词, 第31行的歌词,测试</li>
          <li>我是歌词, 第32行的歌词,测试</li>
          <li>我是歌词, 第33行的歌词,测试</li>
          <li>我是歌词, 第34行的歌词,测试</li>
          <li>我是歌词, 第35行的歌词,测试</li>
          <li>我是歌词, 第36行的歌词,测试</li>
          <li>我是歌词, 第37行的歌词,测试</li>
          <li>我是歌词, 第38行的歌词,测试</li>
          <li>我是歌词, 第39行的歌词,测试</li>
          <li>我是歌词, 第40行的歌词,测试</li>
          <li>我是歌词, 第41行的歌词,测试</li>
          <li>我是歌词, 第42行的歌词,测试</li>
          <li>我是歌词, 第43行的歌词,测试</li>
          <li>我是歌词, 第44行的歌词,测试</li>
          <li>我是歌词, 第45行的歌词,测试</li>
          <li>我是歌词, 第46行的歌词,测试</li>
          <li>我是歌词, 第47行的歌词,测试</li>
          <li>我是歌词, 第48行的歌词,测试</li>
          <li>我是歌词, 第49行的歌词,测试</li>
          <li>我是歌词, 第50行的歌词,测试</li>
        </ul>
      </ScrollView>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ScrollView from '@/components/ScrollView'
export default {
  name: 'Banner',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          hideOnClick: false
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    ScrollView
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
.player-middle{
  position: fixed;
  top: 170px;
  bottom: 360px;
  left: 0;
  right: 0;
  @include font_color();
  .item{
    .cd-wrapper{
      width: 500px;
      height: 500px;
      border-radius: 50%;
      overflow: hidden;
      border: 30px solid #fff;
      margin: 0 auto;
      img{
        width: 100%;
      }
    }
    p{
      text-align: center;
      margin-top: 75px;
      @include font_color();
    }

  }
  .swiper-wrapper{
    .lyric-wrapper{
      padding-bottom: 60px;
      overflow: hidden;
      box-sizing: border-box;
      .lyric-list{
        padding-bottom: 250px;
        li{
          @include font_size($font_medium);
          height: 100px;
          line-height: 90px;
          text-align: center;
        }
      }
    }
  }
}
</style>
<style lang="scss">
@import "../../assets/css/mixin";
.player-middle{
  padding-bottom: 70px;
  padding-top: 30px;
  .swiper-pagination-bullet{
    width: 24px;
    height: 9px;
    border-radius: 12px;
    @include bg_sub_color();
    opacity: 1;
    transition: width .5s ease-in-out;
  }
  .swiper-pagination-bullet-active{
    width: 60px;
    height: 9px;
    @include player_background_color();
  }
}
</style>
