<template>
  <div class="ranking-card">
    <div class="hb">
      <h1>{{information.name}}</h1>
      <h2>{{information.fullName}}</h2>
    </div>
    <div class="bd">
      <ul class="ranking-list">
        <template v-for="(item,id) in information.list">
          <li class="ranking-item" @mouseenter="sover(id)" @mouseleave="sout(id)">
            <div class="ranking-number">{{id + 1}}</div>
            <div class="ranking-item-content">
              <div class="rank-works-simple" v-show="id != mouseId">
                <h3 class="title">{{item.works.title}}</h3>
                <span class="kind-link">{{item.works.kinds[0].shortName}}</span>
              </div>
              <div class="rank-works-detailed" v-show="id == mouseId">
                <div class="info">
                  <div class="title">{{item.works.title}}</div>
                  <div class="author" v-if="item.works.author.length > 0">{{item.works.author[0].name}}</div>
                  <div class="author" v-else>暂无信息</div>
                  <div class="extra-info">{{item.works.kinds[0].shortName}}</div>
                </div>
                <div class="cover">
                  <img
                    :src="item.works.cover.replace(/^(http)[s]*(\:\/\/)/, 'https://images.weserv.nl/?url=')"
                    alt
                  >
                </div>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <div class="ft">查看详情</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mouseId: 0
    };
  },
  props: {
    information: Object
  },
  methods: {
    sover: function(event) {
      this.mouseId = event;
    },
    sout: function(event) {
      this.mouseId = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 1256px) {
  .rankings-list .ranking-card {
    width: calc(33.33% - 16px);
  }
}
.ranking-card {
  display: inline-block;
  vertical-align: top;
  margin: 0 8px 40px;
  margin-bottom: 40px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: calc(25% - 16px);
  padding: 20px 20px 0;
  background: #fff;
  .hb {
    h1 {
      color: #bb996d;
      font-size: 18px;
      line-height: 25px;
      font-weight: bold;
    }
    h2 {
      color: #a6a6a6;
      font-weight: normal;
      font-size: 12px;
      margin-top: 2px;
    }
  }
  .bd {
    margin-top: 30px;
    .ranking-list {
      margin: -20px 0 0;
      .ranking-item {
        padding-top: 15px;
        &:nth-child(1) {
          .ranking-number {
            color: #fa595f;
          }
        }
        &:nth-child(2) {
          .ranking-number {
            color: #ff9e2c;
          }
        }
        .ranking-number {
          float: left;
          width: 20px;
          color: #f9c300;
          font-weight: bold;
          font-size: 14px;
          line-height: 19px;
        }
        .ranking-item-content {
          .rank-works-simple {
            display: flex;
            align-items: center;
            .title {
              font-size: 14px;
              flex: 1 0;
              font-weight: normal;
              line-height: 1.3;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #333;
            }
            .kind-link {
              flex: 0 0 56px;
              text-align: right;
              color: #777;
              font-size: 12px;
            }
          }
          .rank-works-detailed {
            display: flex;
            .info {
              flex: 1;
              min-width: 0;
              position: relative;
              .title {
                margin-bottom: 2px;
                font-size: 14px;
                font-weight: normal;
                line-height: 1.3;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .author {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-top: 10px;
                margin-bottom: 15px;
                font-size: 12px;
                color: #777;
              }
              .extra-info {
                color: #777;
                font-size: 12px;
              }
            }
            .cover {
              -webkit-box-flex: 0;
              -webkit-flex: none;
              flex: none;
              width: 80px;
              height: 120px;
              margin-left: 5px;
              box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
              background: #ebf0f2;
              border-radius: 2px;
              img {
                width: 100%;
                height: 100%;
                transition: opacity 0.5s ease-in;
                opacity: 1;
                border: none;
                max-width: 100%;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
  .ft {
    cursor: pointer;
    text-align: center;
    line-height: 1;
    padding: 25px 0;
    color: #389eac;
  }
}
</style>
