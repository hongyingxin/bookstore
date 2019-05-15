<template>
  <div class="page-index">
    <el-row :gutter="40">
      <el-col :span="3" :offset="5">
        <Menu/>
      </el-col>
      <el-col :span="11">
        <Swiper/>
        <List/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from '~/components/index/Menu.vue'
import Swiper from '~/components/index/Swiper.vue'
import List from '~/components/index/List.vue'


export default {
  components: {
    Menu,
    Swiper,
    List,
  }
}
</script>

<style>

</style>

