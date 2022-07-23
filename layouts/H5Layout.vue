<template>
  <div class="container">
    <div class="header">
      <div class="logo">logo</div>
      <div>
        <img src="~assets/menu.svg" @click="showMenu">
      </div>
      <div v-show="menuShow" class="menu">
        <div class="menuItem" @click="toRoute('/')">首页</div>
        <div class="menuItem" @click="toRoute('/m/produceCharacteristic')">产品特点</div>
        <div class="menuItem" @click="toRoute('/m/producTradvantage')">产品优势</div>
        <div class="menuItem" @click="toRoute('/m/otherProject')">行业案例</div>
        <div class="menuItem" @click="toRoute('/m/news')">行业新闻</div>
      </div>
    </div>
    <nuxt></nuxt>
    <div class="footerShow">
      <div class="listItem" @click="toRoute('/')">首页</div>
      <div class="listItem" @click="toRoute('/m/produceCharacteristic')">产品特点</div>
      <div class="listItem" @click="toRoute('/m/producTradvantage')">产品优势</div>
      <div class="listItem" @click="toRoute('/m/otherProject')">行业案例</div>
      <div class="listItem" @click="toRoute('/m/news')">行业新闻</div>
    </div>
    <div class="footer">
      2022©广东三板斧建筑工程有限公司<a href="https://beian.miit.gov.cn/" target="_blank">备案号：粤ICP备19111018号
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuShow: false
    }
  },
  methods: {
    toRoute(value) {
      this.$router.push(value)
      this.menuShow = false
    },
    showMenu() {
      this.menuShow = !this.menuShow
    }
  },
}
</script>
<style lang="less" scoped>
// .container {
//   padding-top: 1.2rem;
// }
.header {
  position: relative;
  font-size: 0.5rem;
  line-height: 0.5rem;
  background: #fff;
  padding: 0.35rem 0.4rem;
  display: flex;
  border-bottom: 1px solid #e6e6e6;
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
  font-size: 10px;
  .listItem {
    padding: 0.35rem 0.5rem;
    border-bottom: 1px solid #e6e6e6;
  }
}

.menu {
  z-index: 999;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  color: #000;
  font-size: 10px;
  border-top: 1px solid #e6e6e6;
  .menuItem {
    padding: 0.35rem 0.5rem;
    border-bottom: 1px solid #e6e6e6;
  }
}
.footer {
  width: 100%;
  padding: 0.35rem 0;
  padding-left: 0.5rem;
  background: #282738;
  color: #e6e6e6;
  font-size: 12px;
  a {
    margin-left: 10px;
    color: #e6e6e6;
    text-decoration: none;
  }
}
</style>