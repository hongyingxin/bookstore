<template>
  <div class="ranking-section">
    <div class="ranking-title" :style="{backgroundImage:'url(' + child.background + ')'}">
      <div class="section-container">
        <h1>{{child.name}}</h1>
        <h2>{{child.fullName}}</h2>
      </div>
    </div>
    <div class="ranking-container">
      <ul class="ranking-detail">
        <template v-for="(item,id) in child.list">
          <li class="ranking-item">
            <div class="ranking-number">{{id + 1 }}</div>
            <div class="works-item-container">
              <div class="inner">
                <div class="cover">
                  <img
                    :src="item.works.cover.replace(/^(http)[s]*(\:\/\/)/, 'https://images.weserv.nl/?url=')"
                    alt
                  >
                </div>
                <div class="info">
                  <div class="title">{{item.works.title}}</div>
                  <div
                    class="author"
                    v-if="item.works.author.length > 0"
                  >{{item.works.author[0].name}}</div>
                  <div class="author" v-else>暂无信息</div>
                  <div class="intro">{{item.works.abstract}}</div>
                  <div class="extra-info">
                    <div class="sticky-info">
                      <span>{{formatTotal(item.works.wordCount)}}</span>
                      <span class="separator"></span>
                      <template v-for="(items,ids) in item.works.kinds">
                        <span class="kind-link">
                          {{items.shortName}}
                        </span>
                        <span class="separator"></span>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    child: Object
  },
  methods: {
    formatTotal: function(num) {
      if (num > 10000) {
        var a = (num / 10000).toFixed(1);
        return a + "万";
      } else {
        return num;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ranking-section {
  margin-bottom: 40px;
  .ranking-title {
    background-color: #e4ecee;
    height: 11.73vw;
    min-height: 114px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    .section-container {
      flex: 1;
      box-sizing: content-box;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 60px;
      padding-right: 60px;
      h1 {
        font-size: 30px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
      }
      h2 {
        font-size: 14px;
        margin-top: 8px;
      }
      h1,
      h2 {
        line-height: 1;
        color: #fff;
        font-weight: normal;
      }
    }
  }
  .ranking-container {
    max-width: 752px;
    margin: 0 auto;
    padding: 0 20px;
    .ranking-detail {
      .ranking-item {
        padding: 20px 0;
        display: flex;
        .ranking-number {
          margin: 45px 50px auto 20px;
          width: 27px;
          height: 30px;
          font-size: 18px;
          color: #fa595f;
          text-align: center;
          line-height: 24px;
          font-weight: bold;
          background: url("../../assets/images/rank-badge-bg.svg");
          background-size: 27px 30px;
          -webkit-filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
          filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
          -webkit-flex-shrink: 0;
          flex-shrink: 0;
        }
        .works-item-container {
          flex-grow: 1;
          height: 120px;
          .inner {
            display: flex;
            .cover {
              -webkit-box-flex: 0;
              -webkit-flex: none;
              flex: none;
              margin-right: 12px;
              width: 80px;
              height: 120px;
              box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
              background: #ebf0f2;
              border-radius: 2px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .info {
              flex: 1;
              overflow: hidden;
              .title {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 4px;
                font-size: 16px;
                line-height: 1.25;
                font-weight: bold;
                color: #333;
              }
              .author {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 12px;
                font-size: 12px;
                color: #777;
              }
              .intro {
                margin-bottom: 8px;
                font-size: 13px;
                line-height: 1.5;
                height: 40px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              }
              .extra-info {
                display: flex;
                margin-bottom: 8px;
                font-size: 12px;
                height: 16px;
                line-height: 16px;
                color: #777;
                .sticky-info {
                  .separator {
                    display: inline-block;
                    margin: 0 10px;
                    width: 1px;
                    height: 10px;
                    background: #ddd;
                    vertical-align: -1px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
