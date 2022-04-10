<template>
  <div class="index">
    <div class="bg">
      <img src="/imgs/news/bg.jpeg" alt="">
    </div>
    <div class="news">
      <div v-for="(item, index) in newList" :key="index" class="item">
        <div class="img">
          <img :src="item.img">
        </div>
        <div class="content">
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'PCLayout',
  data () {
    return {
      newList: [
        { 
          title: '乌兰浩特市餐厨垃圾处理项目（一期工程）环境影响评价 第二次公众参与公示', 
          img: '/imgs/news/1.png',
          time: '2022-04-10'
        },
        { 
          title: '乌兰浩特市餐厨垃圾处理项目（一期工程）环境影响评价 第二次公众参与公示', 
          img: '/imgs/news/1.png',
          time: '2022-04-10'
        },
        { 
          title: '乌兰浩特市餐厨垃圾处理项目（一期工程）环境影响评价 第二次公众参与公示', 
          img: '/imgs/news/1.png',
          time: '2022-04-10'
        },
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
  .news {
    max-width: 1400px;
    margin: 40px auto;
    padding: 70px 120px;
    .item {
      border: 1px solid #e6e6e6;
      display: flex;
      padding: 20px;
      margin-bottom: 20px;
      .img {
        width: 150px;
        margin-right: 20px;
        img {
          width: 150px;
          height: 150px;
        }
      }
      .content {
        flex: 1;
        .title {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
