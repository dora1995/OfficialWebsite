<template>
  <div class="container">
    <div class="header">
      <div class="logo">logo</div>
    </div>
    <nuxt></nuxt>
    <div class="footerShow">
      <div class="listItem">首页</div>
      <div class="listItem">产品展示</div>
      <div class="listItem">大湾区项目</div>
      <div class="listItem">其他地区项目</div>
      <div class="listItem">行业新闻</div>
    </div>
    <div class="footer">
      2022©广东华鑫建筑科技有限公司<a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        >备案号：粤ICP备19111018号
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect(value) {
      this.$router.push(value)
    },
  },
}
</script>
<style lang="less" scoped>
.header {
  //   height: 70px;
  background: #fff;
  padding: 0.35rem 0.4rem;
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
  font-size: 10px;
  .listItem {
    padding: 0.35rem 0.5rem;
    border: 1px solid #e6e6e6;
  }
}
.footer {
  width: 100%;
  padding: 0.35rem 0;
  border-bottom: 1px solid #e6e6e6;
  background: #fff;
  text-align: center;
  a {
    margin-left: 10px;
    color: #000;
    text-decoration: none;
  }
}
</style>