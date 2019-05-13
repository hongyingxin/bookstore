<template>
  <div class="page-index">
    <el-row>
      <el-col :span="3" :offset="6">
        <Menu/>
      </el-col>
      <el-col :span="9">2</el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from '~/components/index/Menu.vue'

export default {
  components: {
    Menu
  }
}
</script>

<style>

</style>
