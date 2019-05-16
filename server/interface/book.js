import Router from 'koa-router'
import List from '../dbs/models/book'
import Menu from '../dbs/models/classify'
import Swiper from '../dbs/models/swiper'
import Foolish from '../dbs/models/listbook'

let router = new Router({
  prefix: '/index'
})

/**
 * 首页轮播
 * @param {}
 * @return {gradelist:高分推荐,newlist:最新上架}
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
export default router
