# bookstore

> 一个书店

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

<h3>这是一个书店项目，所有的数据是使用Puppeteer爬虫工具抓取豆瓣电子书数据。数据库使用mongodb和mongoose模型。目前的话，已经完成了首页、列表页、搜索页、详情页。由于当时没考虑到首页的组件化，所以首页没有用服务度渲染，后面开发的几个页面则有。</h3>
<h3>存在的一些问题：</h3>
<h3>只是一时兴起而做的项目，服务端经验不足，导致后面一些数据库字段比较混乱，包括一部分字段是字符串或数字，接口方面是遵循了restful规范，后来感觉接口这块功能设计过于臃肿，以及目前卡在购物车功能模块的设计上面</h3>
