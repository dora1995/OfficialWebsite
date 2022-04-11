<template>
<div>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <!-- <div v-for="(item, index) in special" :key="index" class="swiper-slide">
        <img :src="/qz-mallitem.picUrl" style="height: 400px; width: 100%">
      </div> -->
      <div class="swiper-slide">
        <img src="/qz-mall/imgs/home/lunbo1.png" style="height: 400px; width: 100%">
      </div>
      <div class="swiper-slide">
        <img src="/qz-mall/imgs/home/lunbo2.png" style="height: 400px; width: 100%">
      </div>
      <div class="swiper-slide">
        <img src="/qz-mall/imgs/home/lunbo3.png" style="height: 400px; width: 100%">
      </div>
    </div>
    <div id="swiper-pagination" class="swiper-pagination"></div>
  </div>
  <div class="module">
    <div class="title">产品展示</div>
    <div class="content">
      <div class="products">
        <div class="item">
          <div class="img"><img src="/qz-mall/imgs/productShow/1.jpg"></div>
          <div class="title">房建基坑填充类</div>
        </div>
        <div class="item">
          <div class="img"><img src="/qz-mall/imgs/productShow/2.jpg"></div>
          <div class="title">公路软基填充类</div>
        </div>
        <div class="item">
          <div class="img"><img src="/qz-mall/imgs/productShow/3.jpg"></div>
          <div class="title">公路软基填充类</div>
        </div>
        <div class="item">
          <div class="img"><img src="/qz-mall/imgs/productShow/4.jpg"></div>
          <div class="title">市政管廊填充类</div>
        </div>
        <div class="item">
          <div class="img"><img src="/qz-mall/imgs/productShow/5.jpg"></div>
          <div class="title">屋面保温找坡类</div>
        </div>
      </div>
    </div>
  </div>
  <div class="module">
    <div class="title">大湾区项目</div>
    <div class="content">
      <div class="products2">
        <div class="item">
          <div class="img"><img src="/qz-mall/imgs/productShow/1.jpg" /></div>
          <div class="title">
            <div class="text">房建基坑填充类</div>
            <div class="time">
              {{ `服务时间：2022 - 2025` }}
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="/qz-mall/imgs/productShow/2.jpg" /></div>
          <div class="title">
            <div class="text">公路软基填充类</div>
            <div class="time">
              {{ `服务时间：2022 - 2025` }}
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="/qz-mall/imgs/productShow/3.jpg" /></div>
          <div class="title">
            <div class="text">房建基坑填充类</div>
            <div class="time">
              {{ `服务时间：2022 - 2025` }}
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="/qz-mall/imgs/productShow/4.jpg" /></div>
          <div class="title">
            <div class="text">市政管廊填充类</div>
            <div class="time">
              {{ `服务时间：2022 - 2025` }}
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="/qz-mall/imgs/productShow/5.jpg" /></div>
          <div class="title">
            <div class="text">屋面保温找坡类</div>
            <div class="time">
              {{ `服务时间：2022 - 2025` }}
            </div>
          </div>
        </div>
      <!-- <div v-for="item in list" :key="item.url" class="item">
        <div class="img"><img :src="/qz-mallitem.url" /></div>
        <div class="title">
          <div class="text">{{ item.title }}</div>
          <div class="time">
            {{ `服务时间：${item.beginYear} - ${item.endYear}` }}
          </div>
        </div>
      </div> -->
    </div>
    </div>
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
      special: [
        { picUrl: '/imgs/home/lunbo1.png' },
        { picUrl: '/imgs/home/lunbo2.png' },
        { picUrl: '/imgs/home/lunbo3.png' }
      ],
      product: [
        { picUrl: '/imgs/productShow/1.jpg', title: '房建基坑填充类' },
        { picUrl: '/imgs/productShow/2.jpg', title: '公路软基填充类' },
        { picUrl: '/imgs/productShow/3.jpg', title: '公路软基填充类' },
        { picUrl: '/imgs/productShow/4.jpg', title: '市政管廊填充类' },
        { picUrl: '/imgs/productShow/5.jpg', title: '屋面保温找坡类' },
      ],
      list: [
        {
          url: '/imgs/productShow/1.jpg',
          title: '房建基坑填充类',
          beginYear: '2022',
          endYear: '2025',
        },
        {
          url: '/imgs/productShow/2.jpg',
          title: '公路软基填充类',
          beginYear: '2022',
          endYear: '2025',
        },
        {
          url: '/imgs/productShow/3.jpg',
          title: '公路软基填充类',
          beginYear: '2022',
          endYear: '2025',
        },
        {
          url: '/imgs/productShow/4.jpg',
          title: '市政管廊填充类',
          beginYear: '2022',
          endYear: '2025',
        },
        {
          url: '/imgs/productShow/5.jpg',
          title: '屋面保温找坡类',
          beginYear: '2022',
          endYear: '2025',
        },
      ],
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
  margin-top: 30px;
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
  }
}
.products {
    max-width: 1400px;
    margin: 10px auto;
    padding: 20px 110px;
    .item {
      display: inline-block;
      width: 260px;
      margin-right: 40px;
      margin-bottom: 20px;
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
      }
      &:nth-child(4n) {
        margin-right: 0;
      }
      .img {
        width: 260px;
        height: 260px;
        img {
          width: 260px;
          height: 260px;
        }
      }
      .title {
        margin-top: 10px;
        text-align: center;
        font-size: 18px;
        font-weight: 300;
      }
    }
}
.products2 {
    max-width: 1400px;
    margin: 10px auto;
    padding: 20px 130px;
    .item {
      position: relative;
      display: inline-block;
      width: 350px;
      margin-right: 40px;
      margin-bottom: 60px;
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
      }
      &:nth-child(3n) {
        margin-right: 0;
      }
      .img {
        width: 350px;
        height: 300px;
        img {
          width: 350px;
          height: 300px;
        }
      }
      .title {
        position: absolute;
        bottom: 0;
        left: 10px;
        right: 10px;
        margin-top: 10px;
        text-align: center;
        padding: 20px;
        text-align: center;
        background: #fff;
        transform: translateY(50%);
        .text {
          font-weight: bold;
          font-size: 16px;
          margin-bottom: 10px;
        }
        .time {
          font-size: 16px;
          font-weight: 300;
        }
      }
    }
  }
</style>
