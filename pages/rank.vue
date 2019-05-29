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
          <li :class="{active: isActive}" @click="showAll">全部</li>
          <li
            v-for="(item,id) in list"
            :key="id"
            @click="checkoutNav(item)"
            :class="navCheckout==item._id?'active':''"
          >{{item.name}}</li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="all_rank" v-if="!allRank">
          <section class="rankings-group">
            <p class="rankbox-title">综合排行</p>
            <div class="rankings-list">
              <template v-for="(item,id) in list.slice(0,4)">
                <Child :information="item" v-on:listenDetail="skipDetail"/>
              </template>
            </div>
          </section>
          <section class="rankings-group">
            <p class="rankbox-title">频道排行</p>
            <div class="rankings-list">
              <template v-for="(item,id) in list.slice(4,12)">
                <Child :information="item" v-on:listenDetail="skipDetail"/>
              </template>
            </div>
          </section>
          <section class="rankings-group">
            <p class="rankbox-title">女性排行</p>
            <div class="rankings-list">
              <template v-for="(item,id) in list.slice(12,16)">
                <Child :information="item" v-on:listenDetail="skipDetail"/>
              </template>
            </div>
          </section>
          <section class="rankings-group">
            <p class="rankbox-title">测试排行</p>
            <div class="rankings-list">
              <template v-for="(item,id) in list.slice(17,23)">
                <Child :information="item" v-on:listenDetail="skipDetail"/>
              </template>
            </div>
          </section>
        </div>
        <div class="each_rank" v-else>
          <Each :child="childDate"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Child from "~/components/rank/Child.vue";
import Each from "~/components/rank/Each.vue";
export default {
  data() {
    return {
      list: [], //排行榜数据
      allRank: false, //切换全部和子榜单
      childDate: [], //单个子榜单数据
      navCheckout: -1, //榜单切换
      isActive: true, //全部
      scrollTop:0 //滚动条
    };
  },
  components: {
    Child,
    Each
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

  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    checkoutNav: function(params) {
      this.allRank = true;
      this.isActive = false;
      this.childDate = params;
      this.navCheckout = params._id;
    },
    showAll: function() {
      this.isActive = true;
      this.navCheckout = -1;
      this.allRank = false;
    },
    skipDetail: function(data) {
      this.allRank = true;
      this.isActive = false;
      this.childDate = data;
      this.navCheckout = data._id;
      this.backTop();
    },
    backTop: function() {
      let that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 15);
    },
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
    }
  }
};
</script>
<style lang="scss" scoped>
.rank {
  background-color: #f8f9f9;
  margin: 0 auto;
  min-width: 1200px;
  padding-top: 80px;
  padding-bottom: 100px;
  .rank-title {
    max-width: 1200px;
    font-size: 30px;
    font-weight: bold;
    margin: 10px auto 20px auto;
    padding-left: 60px;
    padding-right: 60px;
    color: #333;
  }
  .rank-nav {
    max-width: 1200px;
    margin: 0 auto 40px auto;
    display: flex;
    flex-wrap: wrap;
    padding-left: 60px;
    padding-right: 60px;
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
