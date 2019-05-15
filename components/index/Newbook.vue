<template>
  <div class="box">
    <h3 class="box-title">最新上架</h3>
    <div class="swiper-father">
      <div v-swiper:mySwiper="swiperOption2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,id) in news" :key="id">
            <section class="swiper-box">
              <img :src="item.image">
              <p class="book-title">{{item.title}}</p>
              <p class="book-author">{{item.author}}</p>
              <p class="book-money">{{item.fixedPrice == '免费'?'0.00':item.fixedPrice}}元</p>
            </section>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev swiper-button-prev2" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-next2" slot="button-next"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    news: Array
  },
  data() {
    return {
      // list: [],
      swiperOption2: {
        slidesPerColumn: 2,
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 5,
        // loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination2",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2"
        }
      }
    };
  }
  // async mounted() {
  //   const {
  //     status,
  //     data: { newlist }
  //   } = await this.$axios.get("/index/getbook");
  //   if (status === 200) {
  //     console.log(newlist.length)
  //     this.list = newlist;
  //   }
  // }
};
</script>
<style lang="scss" scoped>
.box {
  .box-title {
    font-size: 18px;
    line-height: 45px;
    color: #333;
    border-bottom: 1px solid #ddd;
    margin-bottom: 15px;
  }
  .swiper-father {
    position: relative;
    .swiper-button-prev {
      left: -30px;
      background-size: 15px 25px;
      outline: none;
    }
    .swiper-button-next {
      right: -30px;
      background-size: 15px 25px;
      outline: none;
    }
    .swiper-box {
      position: relative;
      width: 150px;
      height: 335px;
      background-color: #ffffff;
      border: 1px solid #f2f2eb;
      padding: 10px;
      box-sizing: border-box;
      img {
        width: 130px;
        height: 195px;
      }
      .book-title {
        text-align: left;
        font-size: 14px;
        font-weight: bold;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        color: #333;
        margin-bottom: 5px;
      }
      .book-author {
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        color: #777;
        font-size: 12px;
      }
      .book-money {
        position: absolute;
        left: 20px;
        bottom: 20px;
        line-height: 1;
        *line-height: 1.1;
        color: #61b39b;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
}
.my-swiper {
  height: 300px;
  width: 100%;
  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}
</style>


