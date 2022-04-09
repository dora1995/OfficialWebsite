<template>
<div>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in special" :key="index" class="swiper-slide">
        <img :src="item.picUrl" style="height: 300px; width: 100%">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
  <div class="module">
    <div class="title">产品展示</div>
    <div class="content"></div>
  </div>
  <div class="module">
    <div class="title">大湾区项目</div>
    <div class="content"></div>
  </div>
</div>
  
</template>

<script>
// import axios from '@nuxtjs/axios'
export default {
  name: 'IndexPage',
  layout: 'PCLayout',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true,
      },
      special: [
        { picUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319222813_tBvzd.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652104511&t=07f469959f163ac85a7fd1bdbd49ad3b' },
        { picUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319222813_tBvzd.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652104511&t=07f469959f163ac85a7fd1bdbd49ad3b' },
        { picUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319222813_tBvzd.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652104511&t=07f469959f163ac85a7fd1bdbd49ad3b' }
      ]
    }
  }
}
</script>
<style>
html,
body {
  min-width: 1400px;
}
</style>

<style lang="less" scoped>
.index {
  background: red;
}
.module {
  margin-top: 20px;
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
  }
}
</style>
