<template>
  <div class="header">
    <logo :message="condition" v-on:listenSearch="showSearch"/>
    <search/>
    <login/>
    <div class="search-box" v-if="condition.isSearch">
      <section class="search-section">
        <el-input v-model="searchValue" placeholder="请输入内容"></el-input>
        <div class="search-button">搜索</div>
      </section>
    </div>
  </div>
</template>
<script>
import Logo from "~/components/public/header/logo.vue";
import Search from "~/components/public/header/search.vue";
import Login from "~/components/public/header/login.vue";
export default {
  data() {
    return {
      condition: {
        isClassify: false,
        isSearch: false
      },
      searchValue: ""
    };
  },
  components: {
    Logo,
    Search,
    Login
  },
  methods: {
    showSearch: function(data) {
      console.log(data);
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  position: fixed;
  z-index: 100;
  padding: 0px 20px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  background: #fff;
  color: #333;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.1);
  .search-box {
    // display: none;
    position: absolute;
    z-index: 110;
    left: 0px;
    bottom: -120px;
    width: 100%;
    background-color: #fff;
    box-shadow: 1px 1px 3px 0 rgba(0,0,0,0.1);
    .search-section {
      display: flex;
      margin: 40px auto;
      width: 560px;
      height: 40px;
      .search-button {
        width: 70px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 13px;
        background: #fff;
        color: #333;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 5px;
        box-sizing: border-box;
        // box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
      }
    }
  }
}
</style>


