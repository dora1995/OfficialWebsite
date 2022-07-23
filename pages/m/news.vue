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
      <div class="swiper-pagination"></div>
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
    </div>
    <div style="text-align: center;margin-bottom: 20px;">
      <el-pagination background layout="prev, pager, next" :total="page.total" @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'H5Layout',
  data() {
    return {
      newList: [],
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
    }
  },
  beforeMount() {
    this.getData(1)
  },
  methods: {
    handleClick(id) {
      this.$router.push(`/m/newDetail/${id}`)
    },
    getData(current) {
      const { pageSize } = this.page
      this.$axios.get(`/admin/article/page?current=${current}&size=${pageSize}`).then(res => {
        this.newList = res.data.records
        this.page.total = res.data.total;
        this.page.current = current
      })
    },
    handleCurrentChange(current) {
      this.getData(current)
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
.lunbo {
  background-position: center;
  height: 20vh;
  width: 100%;
  background-size: 100vw auto;
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
  .news {
    padding: 0.5rem;
    padding-top: 1rem;
    .item {
      border: 1px solid #e6e6e6;
      // padding: 0.5rem;
      margin-bottom: 1rem;
      .img {
        position: relative;
        width: 100%;
        img {
          width: 100%;
          height: 4rem;
          border: 1px solid #e6e6e6;
        }
        .time {
          position: absolute;
          top: 0;
          left: 20px;
          background: #c41a1f;
          padding: 10px;
          color: #fff;
          transform: translateY(-30%);
          font-size: 12px;
          text-align: center;
          .day {
            border-bottom: 1px solid #fff;
            margin-bottom: 5px;
            padding-bottom: 5px;
          }
          .year {
            font-size: 16px;
          }
        }
      }
      .content {
        padding: 0.2rem 0.5rem;
        .title {
          width: 100%;
          font-weight: bold;
          font-size: 0.5rem;
          margin-bottom: 0.2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .text {
          font-size: 0.3rem;
          line-height: 0.5rem;
          -webkit-line-clamp: 3;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        .tolook {
          display: inline-block;
          margin-top: 0.3rem;
          padding: 0.2rem 0.4rem;
          background: #5190F3;
          color: #fff;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
