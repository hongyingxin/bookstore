<template>
  <div class="menu">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>分类</span>
      </div>
      <div v-for="(item,id) in menu" :key="id" class="text item">{{item.shortName}}</div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu:[]
    };
  },
  async mounted() {
    const {status,data:{menu}} = await this.$axios.get("/v1/getMenu")
    if(status === 200){
      this.menu = menu
    }
  }
};
</script>

<style scoped lang="scss">
.menu {
  .text {
    font-size: 14px;
  }
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
