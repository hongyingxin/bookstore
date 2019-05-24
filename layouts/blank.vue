<template>
  <div class="layout-blank">
    <div class="login-header">
      <div class="nav-primary">
        <a href="/" class="logo"/>
      </div>
    </div>
    <nuxt/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.login-header {
  background-color: #edf4ed;
  position: relative;
  width: 100%;
  height: auto;
  .nav-primary {
    width: 1040px;
    margin: 0 auto;
    overflow: hidden;
    padding: 25px 0 25px;
  }
  .logo {
    background-image: url(../assets/images/douban_logo.png);
    background-size: 100% 100%;
    width: 143px;
    height: 28px;
    display: block;
  }
}
</style>
