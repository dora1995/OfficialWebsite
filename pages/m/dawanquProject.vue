<template>
  <div class="index">
    <div class="bg">
      <img src="/imgs/productShow/bg.jpeg" alt="" />
    </div>
    <div class="products">
      <div v-for="item in list" :key="item.url" class="item">
        <div class="img"><img :src="item.url" /></div>
        <div class="title">
          <div class="text">{{ item.title }}</div>
          <div class="time">
            {{ `服务时间：${item.beginYear} - ${item.endYear}` }}
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
