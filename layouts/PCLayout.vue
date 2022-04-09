<template>
  <div class="container">
    <div class="header">
      <div class="logo">logo</div>
      <el-menu
        :default-active="activeIndex"
        class="elMenu"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <!-- <el-submenu index="2">
          <template slot="title">走近XX</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu> -->
        <el-menu-item index="/produceShow">产品展示</el-menu-item>
        <el-menu-item index="/dawanquProject">大湾区项目</el-menu-item>
        <el-menu-item index="/otherProject">其他地区项目</el-menu-item>
        <el-menu-item index="/news">行业新闻</el-menu-item>
      </el-menu>
    </div>
    <nuxt></nuxt>
    <div class="footer">
      2022©广东华鑫建筑科技有限公司<a href="https://beian.miit.gov.cn/" target="_blank">备案号：粤ICP备19111018号 </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/',
    }
  },
  methods: {
    handleSelect(value) {
      this.$router.push(value)
    },
  },
}
</script>
<style lang="less">
.header {
  height: 70px;
  width: 100%;
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
.footer {
  padding: 15px 0;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  background: #fff;
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  a {
    margin-left: 10px;
    color: #000;
    text-decoration: none;
    &:active, &:hover {
      color: #000;
    }
  }
}
</style>