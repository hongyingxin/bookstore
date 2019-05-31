<template>
  <div class="child">
    <div class="inner">
      <div class="images-box" @click="godetail(list._id)">
        <img :src="list.image" alt>
      </div>
      <div class="info">
        <p class="title">{{list.title}}</p>
        <p class="author">{{list.author}}</p>
        <p class="intro">{{list.detail}}</p>
        <div class="extra-info">
          <div class="rating" v-if="list.grade.length > 0">
            <span class="star"></span>
            <span class="score">{{list.grade}}</span>
            <span class="amount">{{list.gradeNumber}}</span>
          </div>
          <!--暂无评分-->
          <div class="rating-no" v-else>
            <span class="star"></span>
            <span class="no-rating">暂无评分</span>
          </div>
          <span class="separator"></span>
          <span class="words">{{list.words}}</span>
          <span class="separator"></span>
          <span class="kind-link">{{list.kindChild[0].shortName}}</span>
        </div>

        <!--特价-->
        <div class="sale" v-if="list.isPromotion">
          <span class="sale-label">特价</span>
          <span class="price-tag">
            <span class="rmb-tag">￥</span>
            <s class="original-price">{{list.fixedPrice}}</s>
            <span class="discount-price">{{list.salesPrice}}</span>
          </span>
        </div>
        <!--满减-->
        <div class="sale" v-else-if="list.isRebate">
          <span class="sale-label">满减</span>
          <span class="price-tag">
            <span class="rmb-tag">￥{{list.fixedPrice}}</span>
          </span>
        </div>
        <!--免费-->
        <div class="sale" v-else-if="list.isDfree">
          <span class="price-tag">
            <span class="rmb-tag isfree">￥</span>
            <span class="free">免费</span>
          </span>
        </div>
        <!--普通-->
        <div class="sale" v-else>
          <span class="price-tag">
            <span class="rmb-tag">￥{{list.fixedPrice}}</span>
          </span>
        </div>
        <div class="btn-car">
          <img src="../../assets/images/cart.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Object
  },
  methods: {
    godetail: function(data) {
      this.$router.push({ name: 'detail',query:{bookId:data}}) 
    }
  }
};
</script>
<style lang="scss" scoped>
.child {
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  width: calc(50% - 20px);
  border-bottom: 1px solid #ddd;
  &:nth-child(2n + 1) {
    margin-right: 40px;
  }
  .inner {
    display: flex;
    .images-box {
      cursor: pointer;
      flex: 0;
      margin-right: 12px;
      width: 80px;
      height: 120px;
      img {
        width: 80px;
        height: 120px;
      }
    }
    .info {
      flex: 1;
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
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 8px;
        font-size: 13px;
        line-height: 1.5;
        height: 40px;
      }
      .extra-info {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        margin-bottom: 8px;
        font-size: 12px;
        height: 16px;
        line-height: 16px;
        color: #777;
        .rating-no {
          display: inline-block;
          .star {
            display: inline-block;
            background-image: url(../../assets/images/no-star.png);
            background-size: 100% 100%;
            width: 10px;
            height: 10px;
          }
          .no-rating {
            color: #a6a6a6;
            margin-left: 5px;
          }
        }
        .rating {
          display: inline-block;
          .star {
            display: inline-block;
            background-image: url(../../assets/images/star.png);
            background-size: 100% 100%;
            width: 10px;
            height: 10px;
          }
          .score {
            color: #fa595f;
            margin-left: 4px;
          }
          .amount {
            color: #777;
            margin-left: 5px;
          }
        }
        .separator {
          display: inline-block;
          margin: 0 10px;
          width: 1px;
          height: 16px;
          line-height: 16px;
          background: #ddd;
        }
      }
      .sale {
        font-size: 15px;
        font-weight: bold;
        .sale-label {
          font-size: 12px;
          font-weight: bold;
          display: inline-block;
          line-height: 1;
          padding: 2px;
          background: #fa595f;
          color: #fff;
          border-radius: 2px 2px 0 2px;
          margin-right: 5px;
          vertical-align: bottom;
        }
        .isfree {
          color: #ddd;
        }
        .free {
          font-weight: bold;
        }
        .price-tag {
          color: #61b39b;
          .rmb-tag {
            margin-left: -2px;
            font-size: 15px;
            font-weight: bold;
          }
          .original-price {
            font-size: 12px;
            font-weight: normal;
            color: #a6a6a6;
          }
          .discount-price {
            color: #fa595f;
            font-size: 15px;
            font-weight: bold;
          }
        }
      }
      .btn-car {
        cursor: pointer;
        position: absolute;
        right: 10px;
        bottom: 20px;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
</style>


