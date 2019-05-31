import Router from 'koa-router'
import Classify from '../dbs/models/classify'
import Book from '../dbs/models/book'
import Press from '../dbs/models/press'
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
router.post('/list', async (ctx) => {
  let {
    params: {
      pageNum,
      pageSize,
      kind
    }
  } = ctx.request.body

  /*模糊查询  多条件  数组*/
  let findcontent = [{
      "kind": parseInt(kind)
    },
    {
      "kindChild": {
        $elemMatch: {
          "kind": kind
        }
      }
    },
  ]

  /*如果kind ==1 则查询全部图书*/
  if (kind == 1) {
    findcontent = [{
        "kind": {
          $exists: true
        }
      },
      // {"kindChild":{$exists:true}},
    ]
  }
  // console.log(pageNum)
  // console.log(pageSize)
  // console.log("条件")
  // console.log(kind)
  const count = await Book.countDocuments({
    "$or": findcontent
  });
  // console.log("长度")
  // console.log(count)
  const template = await Book.find({
    "$or": findcontent
  }).skip((pageNum - 1) * pageSize).limit(pageSize)
  ctx.body = {
    code: 0,
    count: count,
    data: template.map(item => {
      return {
        _id: item._id,
        bookId: item.bookId,
        kind: item.kind,
        kindChild: item.kindChild,
        image: item.image.replace(/^(http)[s]*(\:\/\/)/, 'https://images.weserv.nl/?url='),
        title: item.title,
        author: item.author,
        detail: item.detail,
        grade: item.grade == undefined ? "" : item.grade,
        gradeNumber: item.gradeNumber,
        words: item.words,
        isDfree: item.isDfree,
        isNewbook: item.isNewbook,
        isPromotion: item.isPromotion,
        isRebate: item.isRebate,
        fixedPrice: item.fixedPrice,
        salesPrice: item.salesPrice,
      }
    })
  }

})

/**
 * 图书详情
 * @param {bookId:'图书Id'}
 * @return {}
 * @time 2019年5月31日
 * @auto hyx
 */
router.post('/detail', async (ctx) => {
  let {
    params: {
      bookId
    }
  } = ctx.request.body

  const template = await Book.findOne({
    '_id': bookId
  })
  const press = await Press.findOne({
    'id': template.press
  }, {
    gather: -1,
    _id: -1,
    images: -1,
    title: -1,
    detail: -1
  })

  ctx.body = {
    code: 0,
    template: template,
    press: press == null ? " " : press
  }
})

export default router
