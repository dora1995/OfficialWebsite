<template>
  <div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in special" :key="index" class="swiper-slide">
          <img :src="item.picUrl" style="height: 6rem; width: 100%" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="module">
      <div class="title">主要产品</div>
      <div class="content">
        
      </div>
    </div>
    <div class="module">
      <div class="title">主要业绩</div>
      <div class="content">

      </div>
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
        { picUrl: '/imgs/home/lunbo3.png' }
      ],
    }
  },
}
</script>
<style lang="less" scoped>

.module {
  margin-top: 0.5rem;
  .title {
    text-align: center;
    font-weight: 400;
    font-size: 0.5rem;
  }
}
</style>
