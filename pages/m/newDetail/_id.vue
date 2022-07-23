<template>
  <div>
    <div class="bg">
      <img src="~assets/imgs/news/bg.jpeg" alt="" />
    </div>
    <div class="detail">
      <div class="title">{{ detail.title }}</div>
      <div class="createTime">{{ detail.createTime }}</div>
      <div class="context" v-html="detail.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'H5Layout',
  data() {
    return {
      detail: {
        title: '',
        content: '',
        createTime: '',
        img: ''
      }
    }
  },
  beforeMount() {
    const id = this.$route.params.id
    this.$axios.get(`/admin/article/info/${id}`).then(res => {
      this.detail = res.data
    })
  }
}
</script>
<style>
html,
body {
  min-width: 1400px;
}
</style>
<style lang="less" scoped>
.bg {
  text-align: center;
  overflow: hidden;
  width: 100%;
  img {
    width: 100%;
  }
}
.detail {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  .title {
    text-align: center;
    color: #000;
    font-weight: bold;
    font-size: 28px;
    margin: 20px 0;
  }
  .createTime {
    color: #5F5F5F;
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
  }
  .context {
    min-height: 500px;
  }
}
</style>
