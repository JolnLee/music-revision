<template>
  <div id="app">
    <Header></Header>
    <TabBar></TabBar>
    <router-view></router-view>
    <Player></Player>
  </div>
</template>
<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import Player from '@/views/Player'
export default {
  name: 'App',
  components: {
    Header,
    TabBar,
    Player
  }
}
</script>
<style lang="scss">
#app{
  width: 100%;
  height: 100%;
}
</style>
