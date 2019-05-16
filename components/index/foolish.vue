<template>
  <div class="foolish">
    <h3>豆瓣图书250</h3>
    <section class="content">
      <dl v-for="(item,id) in list" :key="id">
        <dt>
          <img :src="item.img" alt>
        </dt>
        <dd>
          <p>{{item.title}}</p>
        </dd>
      </dl>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  // async asyncData(ctx) {
  //   console.log('wwwwwwwwwwwwww')
  //   console.log(ctx)
  //   const {
  //     status,
  //     data: { list }
  //   } = await ctx.$axios.get("/index/getFoolish");
  //   if (status === 200) {
  //      return list;
  //   }
  // }
  async mounted() {
    const {
      status,
      data: { list }
    } = await this.$axios.get("/index/getFoolish");
    if (status === 200) {
      this.list = list;
    }
  }
};
</script>
<style lang="scss" scoped>
.foolish {
  width: 200px;
  margin-top: 40px;
  h3 {
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    color: #111;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .content {
    width: 190px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    dl {
      width: 85px;
      margin: 0px 20px 10px 0px;
      dt {
        width: 85px;
        height: 127px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &:nth-child(2n) {
        margin: 0px 0px 10px 0px;
      }
    }
    dd {
      padding-top: 10px;
      width: 85px;
      overflow: hidden;
      font-size: 12px;
      color: #3377aa;
      text-align: center;
    }
  }
}
</style>



