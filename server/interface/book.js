import Router from 'koa-router'
import List from '../dbs/models/book'

let router = new Router({prefix:'/v1'})

router.get('/getlist', async (ctx) => {
  let list = await List.find().limit(100)
  ctx.body = {
    code:0,
    list
  }
})
export default router