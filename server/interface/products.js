import Router from 'koa-router'
import Classify from '../dbs/models/classify'
import Book from '../dbs/models/book'
let router = new Router({
  prefix: '/products'
})
/**
 * 分类列表
 * @param {}
 * @return {classify:'分类列表'}
 * @time 2019年5月20日
 * @auto hyx
 */
router.get('/classify', async (ctx) => {
  let content = await Classify.find();
  let whole = {
    id: '1',
    shortName: '全部',
    kinds: []
  }
  content.unshift(whole)
  content.forEach(item => {
    let wholeChild = {
      id: item.id,
      shortName: '全部'
    }
    item.kinds.unshift(wholeChild)
  })
  ctx.body = {
    code: 0,
    classify: content
  }
})

/**
 * 图书列表
 * @param {pageNum:'当前页数',pageSize:'数量',Kind:'查询条件'}
 * @return {}
 * @time 2019年5月20日
 * @auto hyx
 */
router.get('/list', async (ctx) => {
  const pageNum = 1
  const pageSize = 4
  const kind = 110
  let findcontent = {
    kind: kind
  }

  const count = await Book.countDocuments();
  const template = await Book.find(findcontent).skip((pageNum - 1) * pageSize).limit(pageSize)
  console.log(count)
  console.log(template)

  ctx.body = {
    code: 0,
    count: count,
    data: template
  }
  //  await Book.countDocuments({
  //   }, (err, count) => {
  //     Book.find(
  //       findcontent
  //     )
  //     .skip((pageNum - 1) * pageSize)
  //     .limit(pageSize)
  //     .exec((err,doc)=>{
  //       try{
  //         if(!err && doc){
  //           ctx.body = {
  //             code: 0,
  //             count: count,
  //             data:doc
  //           }
  //         }
  //       }catch(e){
  //         console.log(e)
  //       }
  //     })
  //   })

})

export default router
