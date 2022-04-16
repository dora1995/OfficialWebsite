<template>
  <div class="index">
    <div class="bg">
      <img src="~assets/imgs/productShow/bg.jpeg" alt="" />
    </div>
    <div class="products">
      <div class="item">
        <div class="img"><img src="~assets/imgs/productShow/1.jpg" /></div>
        <div class="title">
          <div class="text">房建基坑填充类</div>
          <div class="time">
            {{ `服务时间：2022 - 2025` }}
          </div>
        </div>
      </div>
      <div class="item">
        <div class="img"><img src="~assets/imgs/productShow/2.jpg" /></div>
        <div class="title">
          <div class="text">公路软基填充类</div>
          <div class="time">
            {{ `服务时间：2022 - 2025` }}
          </div>
        </div>
      </div>
      <div class="item">
        <div class="img"><img src="~assets/imgs/productShow/3.jpg" /></div>
        <div class="title">
          <div class="text">公路软基填充类</div>
          <div class="time">
            {{ `服务时间：2022 - 2025` }}
          </div>
        </div>
      </div>
      <div class="item">
        <div class="img"><img src="~assets/imgs/productShow/4.jpg" /></div>
        <div class="title">
          <div class="text">市政管廊填充类</div>
          <div class="time">
            {{ `服务时间：2022 - 2025` }}
          </div>
        </div>
      </div>
      <div class="item">
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
</template>

<script>
export default {
  layout: 'H5Layout',
  data() {
    return {
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
.index {
  .bg {
    text-align: center;
    overflow: hidden;
    height: 2.5rem;
    width: 100%;
    img {
      width: 100%;
      height: 2.5rem;
    }
  }
  .products {
    width: 100%;
    padding: 0.5rem;
    .item {
      position: relative;
      margin-bottom: 1rem;
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
}
</style>
