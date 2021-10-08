<template>
  <div class="recommend">
    <ScrollView>
      <div>
        <Banner :banners="banners"></Banner>
        <Personalized :personalized="personalized" :title="'推荐歌单'" @selectItem="fatherSelectList" :type="'personalized'"></Personalized>
        <Personalized :personalized="album" :title="'最新专辑'"  @selectItem="fatherSelectList" :type="'album'"></Personalized>
        <SongList :newSong="newSong"></SongList>
      </div>
    </ScrollView>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getBanner, getPersonalized, getAlbum, getNewSong } from '@/api'
import Banner from '@/components/Banner'
import Personalized from '@/components/Personalized'
import SongList from '@/components/SongList'
import ScrollView from '@/components/ScrollView'

export default {
  name: 'Recommend',
  components: {
    Personalized,
    Banner,
    SongList,
    ScrollView
  },
  data: function () {
    return {
      banners: [],
      personalized: [],
      album: [],
      newSong: [],
      cookies: ''
    }
  },
  methods: {
    fatherSelectList (id, type) {
      this.$router.push({
        path: `/recommend/detail/${id}/${type}`
      })
    }
  },
  created () {
    getBanner()
      .then((data) => {
        this.banners = data.banners
      })
      .catch(function (err) {
        console.log(err)
      })
    getPersonalized()
      .then((data) => {
        this.personalized = data.result
      })
      .catch(function (err) {
        console.log(err)
      })
    getAlbum()
      .then((data) => {
        this.album = data.albums.splice(0, 6)
        // console.log(data.albums.splice(0, 6))
      })
      .catch(function (err) {
        console.log(err)
      })
    getNewSong()
      .then((data) => {
        this.newSong = data.result
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped lang="scss">
.recommend{
  position: fixed;
  top: 184px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.v-enter{
  opacity: 0;
  transform: scale3d(0.3, 0.3, 0.3);
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: all .5s ease-in-out;
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
  transform: scale3d(0.3, 0.3, 0.3);
}
.v-leave-active{
  transition: all .5s ease-in-out;
}

</style>
