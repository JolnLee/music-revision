<template>
  <div class="recommend">
    <ScrollView>
      <div>
        <Banner :banners="banners"></Banner>
        <Personalized :personalized="personalized" :title="'推荐歌单'"></Personalized>
        <Personalized :personalized="album" :title="'最新专辑'"></Personalized>
        <SongList :newSong="newSong"></SongList>
      </div>
    </ScrollView>
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
      newSong: []
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
}
</style>
