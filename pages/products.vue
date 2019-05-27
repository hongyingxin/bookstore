<template>
  <div class="products">
    <div class="toolbar" ref="tool">
      <div class="inner">
        <ul class="inner-left">
          <li @click="selector(1)" :class="tabId == true?'active':''">
            <span>分类</span>
            <img src="../assets/images/arrow.png" alt>
          </li>
          <!-- <li>
            <span>筛选</span>
            <img src="../assets/images/arrow.png" alt>
          </li>-->
        </ul>
      </div>
      <div class="panel" v-show="tabId == true">
        <ul class="book-kind">
          <li
            v-for="(item,id) in menu"
            :key="id"
            @click="toolbar(item)"
            :class="menuId==item.id?'active':''"
          >{{item.shortName}}</li>
        </ul>
        <ul class="book-kind" v-if="menuId > 1">
          <li
            v-for="(item,id) in kindCild.kinds"
            :key="id"
            @click="toolbarChild(item)"
            :class="menuChildId==item.id?'active':''"
          >{{item.shortName}}</li>
        </ul>
      </div>
    </div>
    <div class="section-container">
      <template v-for="(item,id) in itemList">
        <Item :list="item"/>
      </template>
    </div>
    <div class="paginator-full">
      <el-pagination
        background
        layout="total, prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Item from "~/components/products/Item.vue";
export default {
  data() {
    return {
      menu: [], //目录
      itemList: [], //图书列表
      menuId: "1", //默认选择目录
      menuChildId: "", //默认二级目录
      tabId: false, //默认目录隐藏
      pageNum: 1, //当前页数
      pageSize: 10, //页码
      total: "", //总条数
      currentPage:1,  //当前页数，支持 .sync 修饰符
      kind: 100 //筛选
    };
  },
  components: {
    Item
  },
  created() {
  },
  computed: {
    kindCild: function() {
      // return this.menu.filter(item => item.id === this.menuId)[0]
      return this.menu.filter(item => {
        return item.id === this.menuId;
      })[0];
    }
  },
  mounted() {
     document.addEventListener("click",(e) => {
          if(e.target.contains(this.$refs.tool)){
         this.tabId = false
       }
     })
  },
  async asyncData(ctx) {
    let {
      status: status1,
      data: { code, classify }
    } = await ctx.$axios.get("/products/classify");

    let {
      status: status2,
      data: { count, data }
    } = await ctx.$axios.post("/products/list", {
      params: {
        pageNum: 1,
        pageSize: 10,
        kind: 1
      }
    });

    if (status1 === 200 && status2 === 200) {
      return {
        total: count,
        itemList: data,
        menu: classify
      };
    }
  },
  methods: {
    async handleCurrentChange(val) {
      this.pageNum = val;
      let {
        status,
        data: { code, count, data }
      } = await this.$axios.post("/products/list", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          kind: this.kind
        }
      });
      if (status === 200 && code === 0) {
        this.itemList = data;
      }
    },
    selector: function(data) {
      this.tabId = !this.tabId;
    },
    toolbar: function(data) {
      this.menuId = data.id;
      this.menuChildId = data.id;
      this.getDate(this.menuId)
    },
    toolbarChild: function(data) {
      this.menuChildId = data.id;
      this.getDate(this.menuChildId)
    },
    async getDate(val) {
      /*初始化页码 页数*/
      this.pageNum = 1
      this.pageSize = 10
      this.currentPage = 1
      let {
        status,
        data:{code,count,data}
      } = await this.$axios.post("/products/list",{
        params:{
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          kind: val
        }
      })
      if(status === 200 && code === 0){
        this.itemList = data
        this.total = count
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.products {
  margin: 0 auto;
  width: 1200px;
  padding-top: 80px;
  padding-bottom: 100px;
  .toolbar {
    position: relative;
    .inner {
      position: relative;
      margin: 0 auto;
      background: #ebf0f2;
      overflow: hidden;
      z-index: 1;
      height: 40px;
      line-height: 40px;
      .inner-left {
        li {
          display: inline-block;
          position: relative;
          font-size: 12px;
          height: 40px;
          color: #333;
          cursor: pointer;
          width: 80px;
          text-align: center;
          &.active {
            img {
              transform: rotate(180deg);
              transition: transform 0.3s ease;
            }
          }
          span {
            height: 40px;
            line-height: 40px;
          }
          img {
            margin-left: 10px;
            width: 12px;
            height: 10px;
            vertical-align: middle;
          }
        }
      }
    }
    .panel {
      z-index: 100;
      position: absolute;
      width: 100%;
      // height: 200px;
      padding: 8px 30px 0;
      background: #fff;
      box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      .book-kind {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid #e6e6e6;
        &:last-child {
          border-bottom: 1px solid transparent;
        }
        li {
          line-height: 25px;
          padding: 0 10px;
          margin: 20px 4px;
          font-size: 12px;
          border-radius: 20px;
          color: #333;
          background: none;
          cursor: pointer;
          &.active {
            background: #389eac;
            color: #fff;
          }
        }
      }
    }
  }
  .section-container {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
  }
  .paginator-full {
    display: flex;
    justify-content: center;
    padding-top: 60px;
  }
}
</style>

