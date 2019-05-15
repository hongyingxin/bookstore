<template>
  <div>
    <TopScore :grade="gradelist"/>
    <NewBook :news="newlist"/>
  </div>
</template>
<script>
import TopScore from '~/components/index/TopScore.vue'
import NewBook from '~/components/index/NewBook.vue'
import Test from '~/components/index/Test.vue'
export default {
  data() {
    return {
      gradelist:[],
      newlist:[]
    }
  },
  components: {
    TopScore,
    NewBook
  },
  async mounted(){
    const {status,data:{newlist,gradelist}} = await this.$axios.get("/index/getbook");
    if(status === 200) {
      this.newlist = newlist
      this.gradelist = gradelist
    }
  }
}
</script>

