<template>
  <div class="site">
    <ul>
      <li>
        <nuxt-link to="/products">图书</nuxt-link>
      </li>
      <li class="active">
        <nuxt-link to="/rank">排行</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.site {
  display: flex;
  ul {
    display: flex;
    font-size: 14px;
    color: #333;
    li {
      display: flex;
      align-items: center;
      // padding: 0 20px;
      margin: 5px 20px;
      cursor: pointer;
      a{
        color: #333;
      }
      &:hover {
        border-bottom: 1px solid blue;
      }
    }
  }
}
</style>

