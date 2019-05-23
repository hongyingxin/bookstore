<template>
  <div class="logo">
    <nuxt-link to="/">
      <div class="douban-icon"></div>
    </nuxt-link>
    <ul class="nav">
      <li @click="check(1)">
        <img src="../../../assets/images/classify.png" alt>
        <span>分类</span>
      </li>
      <li @click="check(2)">
        <img src="../../../assets/images/search.png" alt>
        <span>搜索</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:{
    message:Object
  },
  methods:{
    check: function(data){
      if (data == 1) {
        // this.$router.push('/products')
        // this.message.isClassify = true
      } else if (data == 2){
        this.message.isSearch = !this.message.isSearch
      }
      this.$emit("listenSearch",this.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  .douban-icon {
    margin-top: 10px;
    width: 117px;
    height: 40px;
    color: #333;
    background: url(../../../assets/images/nav.svg) right top/117px auto
      no-repeat;
    position: relative;
    &::after {
      content: "优质类型小说平台";
      position: absolute;
      display: block;
      font-size: 12px;
      letter-spacing: 2px;
      left: 0px;
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      -webkit-transform-origin: top right;
      transform-origin: top right;
      bottom: 3px;
    }
  }
  .nav {
    display: flex;
    margin-left: 50px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 30px;
      cursor: pointer;
      img {
        width: 25px;
        height: 25px;
        margin-right: 8px;
      }
    }
  }
}
</style>