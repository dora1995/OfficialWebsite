<template>
  <div class="index">
    <div class="bg">
      <img src="~assets/imgs/productShow/bg.jpeg" alt="">
    </div>
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
</template>

<script>
export default {
  layout: 'H5Layout',
  data() {
    return {
      list: [
        { url: '/imgs/productShow/1.jpg', title: '房建基坑填充类' },
        { url: '/imgs/productShow/2.jpg', title: '公路软基填充类' },
        { url: '/imgs/productShow/3.jpg', title: '公路软基填充类' },
        { url: '/imgs/productShow/4.jpg', title: '市政管廊填充类' },
        { url: '/imgs/productShow/5.jpg', title: '屋面保温找坡类' },
        { url: '/imgs/productShow/5.jpg', title: '屋面保温找坡类' },
      ]
    }
  }
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
}
</style>
