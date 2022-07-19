<template>
  <div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div
            class="lunbo lun1"
          ></div>
        </div>
        <div class="swiper-slide">
          <div
            class="lunbo lun2"
          ></div>
        </div>
        <div class="swiper-slide">
          <div
            class="lunbo lun3"
          ></div>
        </div>
      </div>
      <div id="swiper-pagination" class="swiper-pagination"></div>
    </div>
    <div class="module">
        <img src="/imgs/home/producTradvantage.png" alt="">
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
        },
        loop: true,
        autoplay: true,
      },
    }
  },
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
.lunbo {
  background-position: center;
  height: 500px;
  width: 100%;
  background-size: 1400px auto;
  background-repeat: no-repeat;
  background-color: #fff;
}
.lun1 {
  background-image: url('/imgs/home/lunbo4.png');
}
.lun2 {
  background-image: url('/imgs/home/lunbo5.jpg');
}
.lun3 {
  background-image: url('/imgs/home/lunbo3.png');
}
.module {
  margin: 30px 0;
  text-align: center;
  img {
    width: 1400px;
  }
}
</style>
