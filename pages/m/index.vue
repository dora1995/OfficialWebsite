<template>
  <div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="lunbo lun1"></div>
        </div>
        <div class="swiper-slide">
          <div class="lunbo lun2"></div>
        </div>
        <div class="swiper-slide">
          <div class="lunbo lun3"></div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="module">
      <img src="/imgs/home/home.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'H5Layout',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: true,
      },
      special: [
        { picUrl: '/imgs/home/lunbo1.png' },
        { picUrl: '/imgs/home/lunbo2.png' },
        { picUrl: '/imgs/home/lunbo3.png' },
      ],
    }
  },
}
</script>
<style>
html,
body {
  width: 100% !important;
  min-width: 100% !important;
}
</style>
<style lang="less" scoped>
.lunbo {
  background-position: center;
  height: 20vh;
  width: 100%;
  background-size: 100vw auto;
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
  margin-top: 0.5rem;
  img {
    width: 100vw;
  }
}
</style>
