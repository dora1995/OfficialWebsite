<template>
  <div class="index">hello pc!</div>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
  asyncData({ params }, callback) {
    console.log(axios)
    // axios.get('')
    callback(null, { title: 'hk' })
  },
  name: 'IndexPage',
}
</script>
<style>
html,
body {
  width: 1200px;
  max-width: 1200px;
}
</style>

<style lang="less" scoped>
.index {
  background: red;
}
</style>
