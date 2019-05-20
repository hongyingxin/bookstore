<template>
  <div class="products">
    <div class="toolbar">
      <div class="inner">
        <ul class="inner-left">
          <li @click="selector(1)" :class="tabId == true?'active':''">
            <span>分类</span>
            <img src="../assets/images/arrow.png" alt>
          </li>
          <!-- <li>
            <span>筛选</span>
            <img src="../assets/images/arrow.png" alt>
          </li> -->
        </ul>
      </div>
      <div class="panel" v-show="tabId == true">
        <ul class="book-kind" >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [],
      menuId: "1",
      menuChildId: "",
      tabId: false
    };
  },
  computed: {
    kindCild: function() {
      // return this.menu.filter(item => item.id === this.menuId)[0]
      return this.menu.filter(item => {
        return item.id === this.menuId;
      })[0];
    }
  },
  async asyncData(ctx) {
    let {
      status,
      data: { code, classify }
    } = await ctx.$axios.get("/products/classify");
    if (status === 200) {
      return {
        menu: classify
      };
    }
  },
  methods: {
    selector: function(data) {
      this.tabId = !this.tabId;
    },
    toolbar: function(data) {
      this.menuId = data.id;
      this.menuChildId = data.id;
    },
    toolbarChild: function(data) {
      this.menuChildId = data.id;
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
}
</style>

