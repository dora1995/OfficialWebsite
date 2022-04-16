<template>
  <div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="~assets/imgs/home/lunbo1.png" style="height: 6rem; width: 100%" />
        </div>
        <div class="swiper-slide">
          <img src="~assets/imgs/home/lunbo2.png" style="height: 6rem; width: 100%" />
        </div>
        <div class="swiper-slide">
          <img src="~assets/imgs/home/lunbo3.png" style="height: 6rem; width: 100%" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="module">
      <div class="title">主要产品</div>
      <div class="content">
        <div class="products">
          <div class="item">
            <div class="img"><img src="~assets/imgs/productShow/1.jpg"></div>
            <div class="title">房建基坑填充类</div>
          </div>
          <div class="item">
            <div class="img"><img src="~assets/imgs/productShow/2.jpg"></div>
            <div class="title">公路软基填充类</div>
          </div>
          <div class="item">
            <div class="img"><img src="~assets/imgs/productShow/3.jpg"></div>
            <div class="title">公路软基填充类</div>
          </div>
          <div class="item">
            <div class="img"><img src="~assets/imgs/productShow/4.jpg"></div>
            <div class="title">市政管廊填充类</div>
          </div>
          <div class="item">
            <div class="img"><img src="~assets/imgs/productShow/5.jpg"></div>
            <div class="title">屋面保温找坡类</div>
          </div>
          <div class="item">
            <div class="img"><img src="~assets/imgs/productShow/5.jpg"></div>
            <div class="title">屋面保温找坡类</div>
          </div>
        </div>
      </div>
    </div>
    <div class="module">
      <div class="title">主要业绩</div>
      <div class="content">
        <div class="products2">
      <div class="item2">
        <div class="img"><img src="~assets/imgs/productShow/1.jpg" /></div>
        <div class="title">
          <div class="text">房建基坑填充类</div>
          <div class="time">
            {{ `服务时间：2022 - 2025` }}
          </div>
        </div>
      </div>
      <div class="item2">
        <div class="img"><img src="~assets/imgs/productShow/2.jpg" /></div>
        <div class="title">
          <div class="text">公路软基填充类</div>
          <div class="time">
            {{ `服务时间：2022 - 2025` }}
          </div>
        </div>
      </div>
      <div class="item2">
        <div class="img"><img src="~assets/imgs/productShow/3.jpg" /></div>
        <div class="title">
          <div class="text">公路软基填充类</div>
          <div class="time">
            {{ `服务时间：2022 - 2025` }}
          </div>
        </div>
      </div>
      <div class="item2">
        <div class="img"><img src="~assets/imgs/productShow/4.jpg" /></div>
        <div class="title">
          <div class="text">市政管廊填充类</div>
          <div class="time">
            {{ `服务时间：2022 - 2025` }}
          </div>
        </div>
      </div>
      <div class="item2">
        <div class="img"><img src="~assets/imgs/productShow/5.jpg" /></div>
        <div class="title">
          <div class="text">屋面保温找坡类</div>
          <div class="time">
            {{ `服务时间：2022 - 2025` }}
          </div>
        </div>
      </div>
    </div>
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
.module {
  margin-top: 0.5rem;
  .title {
    text-align: center;
    font-weight: 400;
    font-size: 0.5rem;
  }
}
.products {
    width: 100%;
    padding: 0.5rem 0.3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      width: 4rem;
      margin-bottom: 0.5rem;
      .img {
        width: 100%;
        height: 4rem;
        img {
          width: 100%;
          height: 4rem;
        }
      }
      .title {
        margin-top: 10px;
        text-align: center;
      }
    }
  }
  .products2 {
    width: 100%;
    padding: 0.5rem;
    .item2 {
      position: relative;
      margin-bottom: 2rem;
      .img {
        width: 100%;
        height: 4rem;
        img {
          width: 100%;
          height: 4rem;
        }
      }
      .title {
        position: absolute;
        bottom: 0;
        left: 0.5rem;
        right: 0.5rem;
        margin-top: 0.5rem;
        text-align: center;
        padding: 0.5rem;
        text-align: center;
        background: #fff;
        transform: translateY(50%);
        .text {
          font-weight: bold;
          font-size: 16px;
          margin-bottom: 10px;
        }
        time {
          font-size: 16px;
        }
      }
    }
  }
</style>
