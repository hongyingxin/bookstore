import Router from 'koa-router'
import Rank from '../dbs/models/rank'
let router = new Router({
  prefix: '/rank'
})
/**
 * 图书排行榜
 * @param {}
 * @return {}
 * @time 2019年5月27日
 * @auto hyx
 */
router.get('/all', async(ctx) => {
  let content = await Rank.find({}).sort({'name':-1})
  // let bookRank = await Rank.find({name:{$regex:'图书'}})
  // console.log(bookRank)
  ctx.body = {
    code:0,
    data:content.map(item => {
      return {
        _id:item._id,
        background:item.background.url.replace(/^(http)[s]*(\:\/\/)/, 'https://images.weserv.nl/?url='),
        fullName:item.fullName,
        name:item.name,
        list:item.list
      }
    })
  }
})
export default router