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
      <div class="child">
        <div class="inner">
          <div class="images-box">
            <img
              src="https://images.weserv.nl/?url=img1.doubanio.com/view/ark_article_cover/retina/public/34157247.jpg?v=0"
              alt
            >
          </div>
          <div class="info">
            <p class="title">月亮与六便士（作家榜经典）</p>
            <p class="author">〔英〕毛姆</p>
            <p class="intro">银行家查尔斯，人到中年，事业有成，为了追求内心隐秘的绘画梦想，突然抛妻别子，弃家出走。他深知：人的每一种身份都是一种自我绑架，唯有失去是通向自由之途。在异国他乡，他贫病交加，对梦想却愈发坚定执着。他说：我必须画画，就像溺水的人必须挣扎。 在经历种种离奇遭遇后，他来到南太平洋的一座孤岛，同当地一位姑娘结婚生子，成功创作出一系列惊世杰作。就在此时，他被绝症和双目失明击倒，临死之前，他做出了让所有人震惊的决定…… 威廉·萨默塞特·毛姆，英国小说家，剧作家，被誉为“故事圣手”。生于巴黎，十岁前父母双亡，由叔叔接回英国抚养，因身材矮小，说话结巴，总被同龄人欺凌，性格孤僻敏感。在文学界，毛姆是一个优雅、老到、冷漠的人性观察者，几乎每一个人都能在他的故事中看到自己，这也让毛姆成为二十世纪炙手可热的作家。 他的后半生住在一座仙境般的别墅里，晚年几乎获得了整个欧洲文学界的一切殊荣。91岁时，逝于法国。经典代表作：《月亮与六便士》《人性的枷锁》。</p>
            <div class="extra-info">
              <div class="rating">
                <span></span>
                <span class="score">9.4</span>
                <span class="amount">5,149 评分</span>
              </div>
              <div class="words">约 13.4 万字</div>
              <div class="kind-link">世界名著</div>
            </div>
          </div>
        </div>
      </div>
      <div class="child"></div>
      <div class="child"></div>
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
      tabId: false,
      pageNum: 1,
      pageSize: 10,
      kind: 100
    };
  },
  created() {},
  computed: {
    kindCild: function() {
      // return this.menu.filter(item => item.id === this.menuId)[0]
      return this.menu.filter(item => {
        return item.id === this.menuId;
      })[0];
    }
  },
  async asyncData(ctx) {
    console.log(ctx.query);
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
        kind: 100
      }
    });

    if (status1 === 200 && status2 === 200) {
      console.log(data[0]);
      return {
        menu: classify
      };
    }
  },
  methods: {
    // test: async function() {
    //   let {
    //     status: status2,
    //     data: { count, data }
    //   } = await this.$axios.post("/products/list", {
    //     params: {
    //       pageNum: 1,
    //       pageSize: 10,
    //       kind: 100
    //     }
    //   });
    // },
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
  .section-container {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
  }
  .child {
    padding: 20px;
    box-sizing: border-box;
    width: 50%;
    border-bottom: 1px solid #ddd;
    .inner {
      display: flex;
      .images-box {
        flex: 0;
        margin-right: 12px;
        width: 80px;
        height: 120px;
         img {
          width: 80px;
          height: 120px;
        }
      }
      .info{
        flex: 1;
      }
    }
  }
}
</style>

