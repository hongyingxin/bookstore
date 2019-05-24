<template>
  <div class="login">
    <div class="add">
      <img src="../../../assets/images/add.png" alt>
      <span>发表作品</span>
    </div>
    <div class="logon" v-if="user">
      <div class="logon-button">
        <span>欢迎你,</span>
        <span>{{user}}</span>
      </div>
      <div class="exit">
        [
        <span>退出</span>]
      </div>
    </div>
    <div class="right" v-else>
      <ul>
        <li>
          <nuxt-link to="/login">登录</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/register">注册</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login {
  display: flex;
  .add {
    margin-right: 40px;
    display: flex;
    align-items: center;
    color: #5dcaad;
    font-size: 12px;
    img {
      width: 12px;
      height: 12px;
      margin-right: 5px;
    }
  }
  .logon {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #333;
    .logon-button {
      font-size: 14px;
    }
    .exit {
      margin-left: 10px;
      span {
        font-size: 14px;
        padding-left: 5px;
        padding-right: 5px;
        color: #5dcaad;
      }
    }
  }
  .right {
    ul {
      display: flex;
      align-items: center;
      height: 60px;
      li {
        cursor: pointer;
        display: inline-block;
        background: #fff;
        color: #333;
        border-radius: 2px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        border: none;
        padding: 0 15px;
        font-size: 12px;
        height: 26px;
        line-height: 26px;
        a {
          color: #333;
        }
        &:last-child {
          margin-left: 15px;
        }
        &:hover {
          color: #fff;
          background-color: #389eac;
          a {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      user: ""
    };
  },
  async mounted() {
    const {
      status,
      data: { user }
    } = await this.$axios.get("/users/getUser");
    if (status === 200) {
      this.user = user;
    }
  }
};
</script>

