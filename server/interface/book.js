import Router from 'koa-router'
import List from '../dbs/models/book'
import Menu from '../dbs/models/classify'
import Swiper from '../dbs/models/swiper'

let router = new Router({prefix:'/index'})

// db.collection.find({ "field" : { $gt: value } } ); // greater than : field > value

router.get('/getbook', async (ctx) => {
  // ({"key":{$gt:value}})
  let list = await List.find({"grade":{$gt:'9.7'}})
  ctx.body = {
    code:0,
    list:list.map(item => {
      return{
        id:item.bookId,
        title:item.title,
        image:item.image.replace(/^(http)[s]*(\:\/\/)/,'https://images.weserv.nl/?url='),
        author:item.author,
        fixedPrice:item.fixedPrice,
        salesPrice:item.salesPrice,
        isDfree:item.isDfree,
        isPromotion:item.isPromotion
      }
    })
  }
})

router.get('/getMenu',async (ctx) => {
  let menu = await Menu.find()
  ctx.body = {
    code:0,
    menu:menu.map(item => {
      return{
        id:item.id,
        shortName:item.shortName
      }
    })
  }
})

router.get('/getSwiper',async (ctx) => {
  let swiper = await Swiper.find()
  ctx.body = {
    code:0,
    swiperList:swiper.map(item => {
      return{
        id:item.swiperId,
        link:item.swiperLink,
        img:item.swiperImg.replace(/^(http)[s]*(\:\/\/)/,'https://images.weserv.nl/?url=')
      }
    })
  }
})
export default router