<template>
  <div class="recommend">
    <Banner :banners="banners"></Banner>
    <Personalized :personalized="personalized" :title="'推荐歌单'"></Personalized>
    <Personalized :personalized="album" :title="'最新专辑'"></Personalized>
  </div>
</template>

<script>
import { getBanner, getPersonalized, getAlbum } from '@/api'
import Banner from '@/components/Banner'
import Personalized from '@/components/Personalized'

export default {
  name: 'Recommend',
  components: {
    Personalized,
    Banner
  },
  data: function () {
    return {
      banners: [],
      personalized: [],
      album: []
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
  }
}
</script>

<style scoped>

</style>
