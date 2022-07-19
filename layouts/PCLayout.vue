<template>
  <div class="container">
    <div class="headerMain">
      <div class="header">
        <div class="logo">logo</div>
        <el-menu
          :default-active="activeIndex"
          class="elMenu"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="/">公司介绍</el-menu-item>
          <el-menu-item index="/produceShow">产品特点</el-menu-item>
          <el-menu-item index="/dawanquProject">产品优势</el-menu-item>
          <el-menu-item index="/otherProject">行业案例</el-menu-item>
          <el-menu-item index="/news">行业新闻</el-menu-item>
        </el-menu>
      </div>
    </div>
    <nuxt></nuxt>
    <div class="footerShow">
      <div class="main">
        <div class="left">
          <div class="meneuInfo">
            <div class="title" @click="handleSelect('/')">华鑫集团</div>
            <!-- <div class="listShow">
              <div class="item">集团概况</div>
              <div class="item">资质荣誉</div>
              <div class="item">发展历程</div>
              <div class="item">企业文化</div>
            </div> -->
          </div>
          <div class="meneuInfo">
            <div class="title" @click="handleSelect('/produceShow')">产品展示</div>
            <!-- <div class="listShow">
              <div class="item">主要产品</div>
              <div class="item">仓库加工</div>
              <div class="item">大湾区业绩</div>
              <div class="item">其他地区业绩</div>
            </div> -->
          </div>

          <div class="meneuInfo">
            <div class="title" @click="handleSelect('/dawanquProject')">大湾区项目</div>
            <!-- <div class="listShow">
              <div class="item">最新公告</div>
              <div class="item">财务信息</div>
              <div class="item">公司治理</div>
            </div> -->
          </div>
          <div class="meneuInfo">
            <div class="title" @click="handleSelect('/otherProject')">其他地区项目</div>
            <!-- <div class="listShow">
              <div class="item">集团要闻</div>
              <div class="item">行业新闻</div>
            </div> -->
          </div>
          <div class="meneuInfo">
            <div class="title" @click="handleSelect('/news')">行业新闻</div>
            <!-- <div class="listShow">
              <div class="item">联系方式</div>
              <div class="item">人才招聘</div>
              <div class="item">合作伙伴</div>
            </div> -->
          </div>
        </div>
        <div class="right">
          <div class="info">
            <div class="title">联系我们</div>
            <div class="content">
              <div class="infoListItem">
                <i class="el-icon-message icon"></i
                ><span class="text">邮件:hr.dept@taiheasphalt.com</span>
              </div>
              <div class="infoListItem">
                <i class="el-icon-location-outline icon"></i
                ><span class="text"
                  >地址:广东省东莞市南城区科创路96号联科产业园23栋</span
                >
              </div>
              <div class="infoListItem">
                <i class="el-icon-phone-outline icon"></i
                ><span class="text">电话:0769-22172888</span>
              </div>
              <div class="infoListItem">
                <i class="el-icon-star-off icon"></i
                ><span class="text">官网: www.taiheasphalt.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      2022©广东三板斧建筑工程有限公司<a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        >备案号：粤ICP备19111018号
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeIndex() {
      return this.$route.path
    },
  },
  methods: {
    handleSelect(value) {
      this.$router.push(value)
    },
  },
}
</script>
<style lang="less" scoped>
.container {
  padding-top: 70px;
}
.headerMain {
  position: fixed;
  z-index: 999;
  width: 100%;
  background: #fff;
  top: 0;
}
.header {
  height: 70px;
  max-width: 1400px;
  margin: 0 auto;
  background: #fff;
  display: flex;
  .logo {
    flex: 1;
  }
  .elMenu {
    margin-right: 20px;
  }
}
.footerShow {
  width: 100%;
  margin: 0 auto;
  background: #282738;
  color: #ccc;
  .main {
    max-width: 1400px;
    padding: 50px 100px;
    display: flex;
  }
  .left {
    flex: 1;
    display: flex;
    // justify-content: space-around;
    .meneuInfo {
      color: #ccc;
      margin-right: 30px;
      .title {
        font-size: 18px;
        margin-bottom: 20px;
        cursor: pointer;
      }
      .listShow {
        margin-top: 10px;
        .item {
          font-size: 16px;
          margin-bottom: 10px;
        }
      }
    }
  }
  .right {
  }
  .info {
    width: 500px;
    .title {
      font-size: 20px;
      font-weight: bold;
    }
    .content {
      margin-top: 20px;
      .infoListItem {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
        .icon {
          font-size: 20px;
          margin-right: 10px;
          vertical-align: middle;
        }
        .text {
          vertical-align: middle;
        }
      }
    }
  }
}
.footer {
  padding: 15px 0;
  background: #282738;
  color: #fff;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  a {
    margin-left: 10px;
    text-decoration: none;
    color: #fff;
    &:active,
    &:hover {
      color: #fff;
    }
  }
}
</style>