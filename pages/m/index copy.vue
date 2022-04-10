<template>
<div>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in special" :key="index" class="swiper-slide">
        <img :src="item.picUrl" style="height: 400px; width: 100%">
      </div>
    </div>
    <div id="swiper-pagination" class="swiper-pagination"></div>
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
          el: '#swiper-pagination',
          paginationClickable: true,
        },
        paginationClickable: true,
        loop: true,
        autoplay: true,
      },
      special: [
        { picUrl: '/imgs/home/lunbo1.png' },
        { picUrl: '/imgs/home/lunbo2.png' },
        { picUrl: '/imgs/home/lunbo3.png' }
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
