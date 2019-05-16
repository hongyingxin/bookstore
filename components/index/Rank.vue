<template>
  <div class="rank">
    <h3>图书排行榜</h3>
    <section class="rank-box">
      <ul class="nav">
        <li @click="tabclick(1)" :class="checkout==1?'active':''">畅销榜</li>
        <li @click="tabclick(2)" :class="checkout==2?'active':''">好评榜</li>
      </ul>
      <ul class="rank-list">
        <li v-for="(item,id) in rank" :key="id">
          <p class="title">{{item.title}}</p>
          <p class="author">{{item.author}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rank: [],
      list: [],
      checkout: 1
    };
  },
  async mounted() {
    const {
      status,
      data: { list }
    } = await this.$axios.get("/index/geoRank");
    if (status === 200) {
      this.list = list;
      this.rank = list.boom;
    }
  },
  methods: {
    tabclick(item) {
      if (item == 1) {
        this.rank = this.list.boom;
      } else if (item == 2) {
        this.rank = this.list.good;
      }
      this.checkout = item;
    }
  }
};
</script>
<style lang="scss" scoped>
.rank {
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
  .rank-box {
    width: 200px;
    .nav {
      display: flex;
      li {
        cursor: pointer;
        height: 25px;
        line-height: 25px;
        flex: 1;
        text-align: center;
        &.active {
          color: #389eac;
        }
        &:last-child {
          border-left: 1px solid #ddd;
        }
      }
    }
    .rank-list {
      li {
        padding-top: 10px;
        .title {
          font-size: 14px;
          font-weight: bold;
          color: #333;
        }
        .author {
          color: #a6a6a6;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
