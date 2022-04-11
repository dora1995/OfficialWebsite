<template>
  <div class="index">
    <div class="bg">
      <img src="/imgs/productShow/bg.jpeg" alt="" />
    </div>
    <div class="products">
      <!-- <div v-for="item in list" :key="item.url" class="item">
        <div class="img"><img :src="item.url" /></div>
        <div class="title">
          <div class="text">{{ item.title }}</div>
          <div class="time">
            {{ `服务时间：${item.beginYear} - ${item.endYear}` }}
          </div>
        </div>
      </div> -->
      <div class="item">
          <div class="img"><img src="/imgs/productShow/1.jpg" /></div>
          <div class="title">
            <div class="text">房建基坑填充类</div>
            <div class="time">
              {{ `服务时间：2022 - 2025` }}
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="/imgs/productShow/2.jpg" /></div>
          <div class="title">
            <div class="text">公路软基填充类</div>
            <div class="time">
              {{ `服务时间：2022 - 2025` }}
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="/imgs/productShow/3.jpg" /></div>
          <div class="title">
            <div class="text">房建基坑填充类</div>
            <div class="time">
              {{ `服务时间：2022 - 2025` }}
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="/imgs/productShow/4.jpg" /></div>
          <div class="title">
            <div class="text">市政管廊填充类</div>
            <div class="time">
              {{ `服务时间：2022 - 2025` }}
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img"><img src="/imgs/productShow/5.jpg" /></div>
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
  layout: 'PCLayout',
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
<style lang="less" scoped>
.index {
  .bg {
    text-align: center;
    overflow: hidden;
    height: 250px;
    img {
      width: 100%;
      height: 250px;
    }
  }
  .products {
    max-width: 1400px;
    margin: 40px auto;
    padding: 70px 130px;
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
        }
      }
    }
  }
}
</style>
