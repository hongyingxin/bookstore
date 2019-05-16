<template>
  <div class="page-index">
    <el-row type="flex":gutter="40">
      <el-col :span="9">
        <div class="aside">
          <Menu/>
          <Foolish/>
          <Rank/>
        </div>
      </el-col>
      <el-col :span="15">
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
import Foolish from '~/components/index/Foolish.vue'
import Rank from '~/components/index/Rank.vue'


export default {
  components: {
    Menu,
    Swiper,
    List,
    Foolish,
    Rank
  }
}
</script>
<style lang="scss" scoped>
 .page-index{
   min-width: 1200px;
   .aside{
     float: right;
     width: 200px;
   }
 }
</style>


