<template>
  <div class="site">
    <ul>
      <li>图书</li>
      <li class="active">排行</li>
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
      &:hover{
        border-bottom: 1px solid blue;
      }
    }
  }
}
</style>

