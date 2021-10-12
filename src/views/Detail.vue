<template>
  <div class="detail">
    <DetailHeader :title="other.name"></DetailHeader>
    <transition>
      <DetailBg :imgSrc="other.coverImgUrl" ref="bgImg"></DetailBg>
    </transition>
    <div class="bottom">
      <ScrollView ref="scrollview">
        <DetailItem :playlist="playList"></DetailItem>
      </ScrollView>
    </div>
  </div>
</template>

<script>
import DetailHeader from '@/components/Detail/DetailHeader'
import DetailBg from '@/components/Detail/DetailBg'
import DetailItem from '@/components/Detail/DetailItem'
import ScrollView from '@/components/ScrollView'
import { getPLayList, getSongDetail, getAlbumDetail } from '@/api'

export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBg,
    DetailItem,
    ScrollView
  },
  data: function () {
    return {
      playList: [],
      other: {}
    }
  },
  created () {
    if (this.$route.params.type === 'personalized') {
      getPLayList(this.$route.params.id)
        .then((data) => {
          this.other = {
            coverImgUrl: data.playlist.coverImgUrl,
            name: data.playlist.name
          }
          let songsStr = ''
          const songsIds = []
          const songsItem = data.playlist.trackIds
          for (let i = 0, itemLen = songsItem.length; i < itemLen; i++) {
            songsIds.push(songsItem[i].id)
            songsStr = songsIds.join(',')
          }
          getSongDetail(songsStr)
            .then((data) => {
              this.playList = data.songs
            })
            .catch((err) => {
              console.log(err)
            })
        })
        .catch((err) => {
          console.log(err)
        })
    } else if (this.$route.params.type === 'album') {
      getAlbumDetail(this.$route.params.id)
        .then((data) => {
          this.other = {
            coverImgUrl: data.album.blurPicUrl,
            name: data.album.name
          }
          this.playList = data.songs
        })
    }
  },
  mounted () {
    const defaultHeight = this.$refs.bgImg.$el.offsetHeight
    this.$refs.scrollview.scrolling((offsetY) => {
      if (offsetY > 0) {
        const scale = 1 + offsetY / defaultHeight
        this.$refs.bgImg.$el.style.filter = 'blur(0)'
        this.$refs.bgImg.$el.style.transform = `scale(${scale})`
      } else if (offsetY < 0) {
        this.$refs.bgImg.$el.style.filter = 'blur(5px)'
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
.detail{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  @include bg_sub_color();
  .bottom{
    width: 100%;
    position: fixed;
    top: 500px;
    left: 0;
    bottom: 0;
  }
}
.detail{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  @include bg_sub_color();
  .bottom{
    width: 100%;
    position: fixed;
    top: 500px;
    left: 0;
    bottom: 0;
  }
}
</style>
