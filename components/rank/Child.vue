<template>
  <div>
    <div class="ranking-card">
      <div class="hb">
        <h1>长篇连载榜</h1>
        <h2>作品三日内有更新，按周热度排行</h2>
      </div>
      <div class="bd">
        <ul class="ranking-list">
          <li class="ranking-item" @mouseenter="sover(1)" @mouseleave="sout(2)">
            <div class="ranking-number">1</div>
            <div class="ranking-item-content">
              <!-- <div class="rank-works-simple">
                <h3 class="title">锦素年华蕴余生</h3>
                <span class="kind-link">言情女性</span>
              </div>-->
              <div class="rank-works-detailed">
                <div class="info">
                  <div class="title">女神蒙上眼</div>
                  <div class="author">金牙太太</div>
                  <div class="extra-info">言情女性</div>
                </div>
                <div class="cover">
                  <img
                    src="https://images.weserv.nl/?url=img1.doubanio.com/view/ark_article_cover/retina/public/34157247.jpg?v=0"
                    alt="女神蒙上眼"
                  >
                </div>
              </div>
            </div>
          </li>
          <li class="ranking-item" @mouseenter="sover(1)" @mouseleave="sout(2)">
            <div class="ranking-number">2</div>
            <div class="ranking-item-content">
              <div class="rank-works-simple">
                <h3 class="title">锦素年华蕴余生</h3>
                <span class="kind-link">言情女性</span>
              </div>
            </div>
          </li>
          <li class="ranking-item" @mouseenter="sover(1)" @mouseleave="sout(2)">
            <div class="ranking-number">3</div>
            <div class="ranking-item-content">
              <div class="rank-works-simple">
                <h3 class="title">锦素年华蕴余生</h3>
                <span class="kind-link">言情女性</span>
              </div>
            </div>
          </li>
          <li class="ranking-item">
            <div class="ranking-number">4</div>
            <div class="ranking-item-content">
              <div class="rank-works-simple">
                <h3 class="title">锦素年华蕴余生</h3>
                <span class="kind-link">言情女性</span>
              </div>
            </div>
          </li>
          <li class="ranking-item">
            <div class="ranking-number">5</div>
            <div class="ranking-item-content">
              <div class="rank-works-simple">
                <h3 class="title">锦素年华蕴余生</h3>
                <span class="kind-link">言情女性</span>
              </div>
            </div>
          </li>
          <li class="ranking-item">
            <div class="ranking-number">6</div>
            <div class="ranking-item-content">
              <div class="rank-works-simple">
                <h3 class="title">锦素年华蕴余生</h3>
                <span class="kind-link">言情女性</span>
              </div>
            </div>
          </li>
          <li class="ranking-item">
            <div class="ranking-number">7</div>
            <div class="ranking-item-content">
              <div class="rank-works-simple">
                <h3 class="title">锦素年华蕴余生</h3>
                <span class="kind-link">言情女性</span>
              </div>
            </div>
          </li>
          <li class="ranking-item">
            <div class="ranking-number">8</div>
            <div class="ranking-item-content">
              <div class="rank-works-simple">
                <h3 class="title">锦素年华蕴余生</h3>
                <span class="kind-link">言情女性</span>
              </div>
            </div>
          </li>
          <li class="ranking-item">
            <div class="ranking-number">9</div>
            <div class="ranking-item-content">
              <div class="rank-works-simple">
                <h3 class="title">锦素年华蕴余生</h3>
                <span class="kind-link">言情女性</span>
              </div>
            </div>
          </li>
          <li class="ranking-item">
            <div class="ranking-number">10</div>
            <div class="ranking-item-content">
              <div class="rank-works-simple">
                <h3 class="title">锦素年华蕴余生</h3>
                <span class="kind-link">言情女性</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="ft">查看详情</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    sover: function() {
      console.log('移入')
    },
    sout: function() {
      console.log('移除')
    }
  }
};
</script>

<style lang="scss" scoped>
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
    text-align: center;
    line-height: 1;
    padding: 25px 0;
    color: #389eac;
  }
}
</style>
