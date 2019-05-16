<template>
  <div class="list">
    <TopScore :grade="gradelist"/>
    <NewBook :news="newlist"/>
    <Promotion :promotion="promotionlist"/>
  </div>
</template>
<script>
import TopScore from '~/components/index/TopScore.vue'
import NewBook from '~/components/index/NewBook.vue'
import Promotion from '~/components/index/Promotion.vue'
export default {
  data() {
    return {
      gradelist:[],
      newlist:[],
      promotionlist:[]
    }
  },
  components: {
    TopScore,
    NewBook,
    Promotion
  },
  async mounted(){
    const {status,data:{newlist,gradelist,promotionlist}} = await this.$axios.get("/index/getbook");
    if(status === 200) {
      this.newlist = newlist
      this.gradelist = gradelist
      this.promotionlist = promotionlist
    }
  }
}
</script>
<style lang="scss" scoped>
.list{
  width: 800px;
}
</style>


