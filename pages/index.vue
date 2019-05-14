<template>
  <div class="page-index">
    <el-row :gutter="40">
      <el-col :span="3" :offset="5">
        <Menu/>
      </el-col>
      <el-col :span="11">
        <Swiper/>
        <TopScore/>
        <!-- <Test/> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from '~/components/index/Menu.vue'
import Swiper from '~/components/index/Swiper.vue'
import TopScore from '~/components/index/TopScore.vue'
import Test from '~/components/index/Test.vue'


export default {
  components: {
    Menu,
    Swiper,
    TopScore,
    Test
  }
}
</script>

<style>

</style>

