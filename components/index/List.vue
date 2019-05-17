<template>
  <div class="list">
    <TopScore :grade="gradelist"/>
    <Free :free="freelist"/>
    <NewBook :news="newlist"/>
    <Promotion :promotion="promotionlist"/>
  </div>
</template>
<script>
import TopScore from '~/components/index/TopScore.vue'
import NewBook from '~/components/index/NewBook.vue'
import Promotion from '~/components/index/Promotion.vue'
import Free from '~/components/index/Free.vue'
export default {
  data() {
    return {
      gradelist:[],
      newlist:[],
      promotionlist:[],
      freelist:[]
    }
  },
  components: {
    TopScore,
    NewBook,
    Promotion,
    Free
  },
  async mounted(){
    const {status,data:{newlist,gradelist,promotionlist,freelist}} = await this.$axios.get("/index/getbook");
    if(status === 200) {
      this.newlist = newlist
      this.gradelist = gradelist
      this.promotionlist = promotionlist
      this.freelist = freelist
    }
  }
}
</script>
<style lang="scss" scoped>
.list{
  width: 800px;
}
</style>


