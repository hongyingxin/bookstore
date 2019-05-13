import Router from 'koa-router'
import List from '../dbs/models/book'
import Menu from '../dbs/models/classify'
import Swiper from '../dbs/models/swiper'

let router = new Router({prefix:'/v1'})

router.get('/getlist', async (ctx) => {
  let list = await List.find().limit(100)
  ctx.body = {
    code:0,
    list
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
        Img:item.swiperImg
      }
    })
  }
})
export default router