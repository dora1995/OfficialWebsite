<template>
  <div>
    <div class="index">hello mobile!</div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in special" :key="index" class="swiper-slide">
          <img :src="item.picUrl" style="height: 8rem; width: 100%" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
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
        {
          picUrl:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319222813_tBvzd.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652104511&t=07f469959f163ac85a7fd1bdbd49ad3b',
        },
        {
          picUrl:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319222813_tBvzd.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652104511&t=07f469959f163ac85a7fd1bdbd49ad3b',
        },
        {
          picUrl:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319222813_tBvzd.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652104511&t=07f469959f163ac85a7fd1bdbd49ad3b',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.index {
  background: blue;
}
</style>
