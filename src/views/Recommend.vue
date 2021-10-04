<template>
  <div class="recommend">
    <span>热歌推荐</span>
  </div>
</template>

<script>
import { getBanner } from '@/api'

export default {
  name: 'Recommend',
  created () {
    getBanner()
      .then(function (data) {
        console.log(data)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
