<template>
  <div class="rank">
    <el-row>
      <el-col :span="24">
        <p class="rank-title">排行</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <ul class="rank-nav">
          <li class="active">全部</li>
          <li v-for="(item,id) in list" :key="id" @click="checkoutNav(item)">{{item.name}}</li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <section class="rankings-group">
          <p class="rankbox-title">综合排行</p>
          <div class="rankings-list">
            <Child/>
          </div>
        </section>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Child from "~/components/rank/Child.vue";
export default {
  data() {
    return {
      list: [] //排行榜数据
    };
  },
  components: {
    Child
  },
  async asyncData(ctx) {
    let {
      status,
      data: { code, data }
    } = await ctx.$axios.get("/rank/all");
    if (status === 200) {
      return {
        list: data
      };
    }
  },
  methods: {
    checkoutNav: function(params) {
      console.log(params);
    }
  }
};
</script>
<style lang="scss" scoped>
.rank {
  background-color: #f8f9f9;
  margin: 0 auto;
  // width: 1200px;
  padding-top: 80px;
  padding-bottom: 100px;
  .rank-title {
    max-width: 1200px;
    font-size: 30px;
    font-weight: bold;
    margin: 10px auto 20px auto;
    color: #333;
  }
  .rank-nav {
    max-width: 1200px;
    margin: 0 auto 40px auto;
    display: flex;
    flex-wrap: wrap;
    li {
      display: inline-block;
      background: #fff;
      color: #333;
      border-radius: 2px;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
      border: none;
      padding: 0 20px;
      font-size: 15px;
      height: 37px;
      line-height: 37px;
      vertical-align: top;
      margin-right: 10px;
      position: relative;
      margin-bottom: 15px;
      cursor: pointer;
      &.active {
        background: #389eac;
        color: #fff;
        box-shadow: none;
      }
      &:hover {
        background: #389eac;
        color: #fff;
        box-shadow: none;
      }
    }
  }
  .rankings-group {
    box-sizing: content-box;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 60px;
    padding-right: 60px;
    .rankbox-title {
      font-size: 28px;
      font-weight: bold;
      color: #333;
      margin-bottom: 20px;
    }
    .rankings-list {
    }
  }
}
</style>
