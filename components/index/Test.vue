<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="swiper-father">
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
  </div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        require("../../assets/images/111298386.jpg"),
        require("../../assets/images/2282.jpg"),
        require("../../assets/images/2285.jpg")
      ],
      swiperOption: {
        loop: false,
        slidesPerView: "auto",
        // centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination2",
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>


<style lang="scss" scoped>
.swiper-father{
  position: relative;
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