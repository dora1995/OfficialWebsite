<template>
  <div class="index">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="lunbo lun1"></div>
        </div>
        <div class="swiper-slide">
          <div class="lunbo lun2"></div>
        </div>
        <div class="swiper-slide">
          <div class="lunbo lun3"></div>
        </div>
      </div>
      <div id="swiper-pagination" class="swiper-pagination"></div>
    </div>
    <div class="news">
      <div v-for="(item, index) in newList" :key="index" class="item">
        <div class="img">
          <img :src="item.img" />
        </div>
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="text">{{ item.alt }}</div>
          <div class="tolook" @click="handleClick(item.id)">查看详情</div>
        </div>
      </div>
      <div style="text-align: center">
        <el-pagination background layout="prev, pager, next" :total="page.total" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
      page: {
        total: 0,
        current: 1,
        pageSize: 10
      },
      newList: []
    }
  },
  beforeMount () {
    this.getData(1)
  },
  methods: {
    handleClick(id) {
      this.$router.push(`/newDetail/${id}`)
    },
    getData(current) {
      const { pageSize } = this.page
      this.$axios.get(`/admin/article/page?current=${current}&size=${pageSize}`).then(res => {
        this.newList = res.data.records
        this.page.total = res.data.total;
        this.page.current = current
      })
    },
    handleCurrentChange (current) {
      this.getData(current)
    }
  },
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
  .lunbo {
  background-position: center;
  height: 500px;
  width: 100%;
  background-size: 1400px auto;
  background-repeat: no-repeat;
  background-color: #fff;
  }
  .lun1 {
    background-image: url('/imgs/home/lunbo4.png');
  }
  .lun2 {
    background-image: url('/imgs/home/lunbo5.jpg');
  }
  .lun3 {
    background-image: url('/imgs/home/lunbo3.png');
  }
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
        position: relative;
        width: 250px;
        margin-right: 30px;
        img {
          width: 250px;
          height: 150px;
          border: 1px solid #e6e6e6;
        }
        .time {
          position: absolute;
          top: 0;
          left: 20px;
          background: #c41a1f;
          padding: 10px;
          color: #fff;
          transform: translateY(-50%);
          font-size: 14px;
          text-align: center;
          .day {
            border-bottom: 1px solid #fff;
            margin-bottom: 5px;
            padding-bottom: 5px;
          }
          .year {
            font-size: 18px;
          }
        }
      }
      .content {
        flex: 1;
        padding-right: 60px;
        .title {
          width: 100%;
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .text {
          font-size: 16px;
          line-height: 20px;
          max-height: 60px;
          -webkit-line-clamp: 3;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        .tolook {
          display: inline-block;
          margin-top: 20px;
          padding: 15px 40px;
          cursor: pointer;
          background: #5190F3;
          color: #fff;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
