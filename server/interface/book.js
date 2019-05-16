import Router from 'koa-router'
import List from '../dbs/models/book'
import Menu from '../dbs/models/classify'
import Swiper from '../dbs/models/swiper'
import Foolish from '../dbs/models/listbook'
import Rank from '../dbs/models/rank'

let router = new Router({
  prefix: '/index'
})

/**
 * 首页轮播
 * @param {}
 * @return {gradelist:高分推荐,newlist:最新上架,promotion:打折优惠}
 * @time 2019年5月15日
 * @auto hyx
 */
router.get('/getbook', async (ctx) => {
  let gradelist = await List.find({
    "grade": {
      $gt: '9.7'
    }
  })
  let newlist = await List.find({
    onSaleTime: {
      $exists: true
    }
  }).limit(50)
  let promotion = await List.find({
    isPromotion: true
  }).limit(100)


  ctx.body = {
    code: 0,
    newlist: newlist.map(item => {
      return {
        id: item.bookId,
        title: item.title,
        image: item.image.replace(/^(http)[s]*(\:\/\/)/, 'https://images.weserv.nl/?url='),
        author: item.author,
        fixedPrice: item.fixedPrice,
        salesPrice: item.salesPrice,
        isDfree: item.isDfree,
        isPromotion: item.isPromotion,
        onSaleTime: item.onSaleTime
      }
    }),
    gradelist: gradelist.map(item => {
      return {
        id: item.bookId,
        title: item.title,
        image: item.image.replace(/^(http)[s]*(\:\/\/)/, 'https://images.weserv.nl/?url='),
        author: item.author,
        fixedPrice: item.fixedPrice,
        salesPrice: item.salesPrice,
        isDfree: item.isDfree,
        isPromotion: item.isPromotion
      }
    }),
    promotionlist: promotion.map(item =>{
      return {
        id: item.bookId,
        title: item.title,
        image: item.image.replace(/^(http)[s]*(\:\/\/)/, 'https://images.weserv.nl/?url='),
        author: item.author,
        fixedPrice: item.fixedPrice,
        salesPrice: item.salesPrice,
      }
    })
  }
})

/**
 * 分类
 * @param {}
 * @return {menu:分类列表}
 * @time 2019年5月15日
 * @auto hyx
 */

router.get('/getMenu', async (ctx) => {
  let menu = await Menu.find()
  ctx.body = {
    code: 0,
    menu: menu.map(item => {
      return {
        id: item.id,
        shortName: item.shortName
      }
    })
  }
})
/**
 * 轮播图
 * @param {}
 * @return {swiper:轮播列表}
 * @time 2019年5月15日
 * @auto hyx
 */
router.get('/getSwiper', async (ctx) => {
  let swiper = await Swiper.find()
  ctx.body = {
    code: 0,
    swiperList: swiper.map(item => {
      return {
        id: item.swiperId,
        link: item.swiperLink,
        img: item.swiperImg.replace(/^(http)[s]*(\:\/\/)/, 'https://images.weserv.nl/?url=')
      }
    })
  }
})

/** 
 * 豆瓣图书top250
 * @param {}
 * @return {list:图书列表}
 * @time 2019年5月15日
 * @auto hyx
*/
router.get('/getFoolish',async (ctx) => {
  let list = await Foolish.find()
  let new_list = list.sort(()=>{
    return 0.5 - Math.random();
  }).slice(0,10)
  ctx.body = {
    code:0,
    list:new_list.map(item=>{
      return{
        id:item.bookId,
        img:item.images.replace(/^(http)[s]*(\:\/\/)/, 'https://images.weserv.nl/?url='),
        title:item.bookname,
        author:item.author.toString(),
        press:item.press.toString(),
        year:item.year.toString(),
        price:item.price.toString(),
        grade:item.grade,
        grade_number:item.grade_number

      }
    })
  }
})


/** 
 * 豆瓣图书top250
 * @param {}
 * @return {list:排行榜}
 * @time 2019年5月16日
 * @auto hyx
*/
router.get('/geoRank',async (ctx) => {
  // let list = await Rank.find({"$or":[{name:'图书・畅销榜'},{name:'图书・好评榜'}]})
  let listOne = await Rank.find({name:'图书・畅销榜'})
  let listTwo = await Rank.find({name:'图书・好评榜'})
  let listthree = []
  let listfour = []
  let obj = {}
  for(var i = 0; i < listOne[0].list.length;i++){
    let obj = {}
    obj.id = listOne[0].list[i].works.id
    obj.title = listOne[0].list[i].works.title
    obj.author = listOne[0].list[i].works.origAuthor[0] == undefined?listOne[0].list[i].works.author[0].name:listOne[0].list[i].works.origAuthor[0].name
    listthree.push(obj)
  }
  for(var i = 0; i < listTwo[0].list.length;i++){
    let obj = {}
    obj.id = listTwo[0].list[i].works.id
    obj.title = listTwo[0].list[i].works.title
    obj.author = listTwo[0].list[i].works.origAuthor[0] == undefined?listTwo[0].list[i].works.author[0].name:listTwo[0].list[i].works.origAuthor[0].name
    listfour.push(obj)
  }
  
  obj.boom = listthree
  obj.good = listfour

  ctx.body = {
    code:0,
    list:obj
  }
})

export default router
