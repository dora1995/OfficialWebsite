<template>
  <div class="index">
    <div class="bg">
      <img src="/imgs/news/bg.jpeg" alt="" />
    </div>
    <div class="news">
      <div v-for="(item, index) in newList" :key="index" class="item">
        <div class="img">
          <img :src="item.img" />
          <div class="time">
            <div class="day">{{ `${item.month} - ${item.day}` }}</div>
            <div class="year">{{ item.year }}</div>
          </div>
        </div>
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="text">{{ item.alt }}</div>
          <div class="tolook">了解更多</div>
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
      newList: [
        {
          title:
            '乌兰浩特市餐厨垃圾处理项目（一期工程）环境影响评价 第二次公众参与公示',
          alt: '泡沬混凝土又叫发泡混凝土，是通过发泡机器的发泡系统将获得专利权的泡沬剂充分发泡，并 将泡沬与水泥浆均匀搅拌，然后经过发泡机的泵送系统进行现浇施工或模具成型，经自然养护所形 成的一种含有大量封闭气孔的新型轻质保温材料。它属于气泡状绝热材料，突出特点是在混凝土内 部形成封闭的泡沬孔，使混凝土轻质化和保温隔热化。',
          img: '/imgs/news/1.png',
          year: '2022',
          month: '07',
          day: '22',
        },
        {
          title:
            '乌兰浩特市餐厨垃圾处理项目（一期工程）环境影响评价 第二次公众参与公示',
          alt: '泡沬混凝土又叫发泡混凝土，是通过发泡机器的发泡系统将获得专利权的泡沬剂充分发泡，并 将泡沬与水泥浆均匀搅拌，然后经过发泡机的泵送系统进行现浇施工或模具成型，经自然养护所形 成的一种含有大量封闭气孔的新型轻质保温材料。它属于气泡状绝热材料，突出特点是在混凝土内 部形成封闭的泡沬孔，使混凝土轻质化和保温隔热化。',
          img: '/imgs/news/1.png',
          year: '2022',
          month: '07',
          day: '22',
        },
        {
          title:
            '乌兰浩特市餐厨垃圾处理项目（一期工程）环境影响评价 第二次公众参与公示',
          alt: '泡沬混凝土又叫发泡混凝土，是通过发泡机器的发泡系统将获得专利权的泡沬剂充分发泡，并 将泡沬与水泥浆均匀搅拌，然后经过发泡机的泵送系统进行现浇施工或模具成型，经自然养护所形 成的一种含有大量封闭气孔的新型轻质保温材料。它属于气泡状绝热材料，突出特点是在混凝土内 部形成封闭的泡沬孔，使混凝土轻质化和保温隔热化。',
          img: '/imgs/news/1.png',
          year: '2022',
          month: '07',
          day: '22',
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
          padding: 10px 40px;
          border: 1px solid #e6e6e6;
          cursor: pointer;
          &:hover {
            background: #c41a1f;
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
