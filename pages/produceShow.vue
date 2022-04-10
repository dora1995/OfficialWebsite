<template>
  <div class="index">
    <div class="bg">
      <img src="/imgs/productShow/bg.jpeg" alt="">
    </div>
    <div class="products">
      <div v-for="item in list" :key="item.url" class="item">
        <div class="img"><img :src="item.url"></div>
        <div class="title">{{item.title}}</div>
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
        { url: '/imgs/productShow/1.jpg', title: '房建基坑填充类' },
        { url: '/imgs/productShow/2.jpg', title: '公路软基填充类' },
        { url: '/imgs/productShow/3.jpg', title: '公路软基填充类' },
        { url: '/imgs/productShow/4.jpg', title: '市政管廊填充类' },
        { url: '/imgs/productShow/5.jpg', title: '屋面保温找坡类' },
      ]
    }
  }
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
    padding: 70px 120px;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-around;
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
      }
    }
  }
}
</style>
