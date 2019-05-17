<template>
  <div class="footer">
    <div class="copyright">
      <p>© 2014 - 2019 read.douban.com, all rights reserved.&nbsp;&nbsp;北京方舟阅读科技有限公司</p>
      <p>网络视听许可证0110418号&nbsp;&nbsp;新出发京批字第直160030号&nbsp;&nbsp;文网文[2009]267号 (总)网出证(京)字129号</p>
    </div>
    <div class="ft-nav">
      <div class="item">
        <a href>联系我们</a>
      </div>
      <div class="item">
        <a href>版权声明</a>
      </div>
      <div class="item">
        <a href>内容导则</a>
      </div>
      <div class="item">
        <a href>帮助中心</a>
      </div>
      <div class="item">
        <a href>来这里工作</a>
      </div>
      <div href class="logo"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  font-size: 12px;
  color: #fff;
  height: 40px;
  background: #3e4347;
  box-sizing: border-box;
  padding: 0 20px;
  .copyright {
    color: #a6a6a6;
    font-size: 12px;
  }
  .ft-nav {
    height: 40px;
    line-height: 40px;
    display: flex;
    a {
      color: #fff;
      &::after {
        display: inline-block;
        content: "·";
        margin: 0 5px;
      }
    }
    .logo {
      background-color: #3e4347;
      background-image: url(../../../assets/images/white-s.png);
      background-repeat: no-repeat;
      background-position: 15px center;
      width: 115px;
      height: 40px;
      position: relative;
    }
  }
}
</style>

