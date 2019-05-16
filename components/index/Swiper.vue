<template>
  <div class="swiper">
    <div class="block">
      <el-carousel trigger="click" height="250px" >
        <el-carousel-item v-for="(item,id) in swiperList" :key="id">
          <img :src=item.img alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperList: [],
      imgUrl: "../../assets/images/508.jpg"
    };
  },
  async mounted() {
    const {
      status,
      data: { swiperList }
    } = await this.$axios.get("/index/getSwiper");
    if (status === 200) {
      this.swiperList = swiperList
    }
  }
};
</script>
<style>
.swiper{
  width: 800px;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>