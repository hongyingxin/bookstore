import Router from 'koa-router'
import User from '../dbs/models/users'
import Passport from '../utils/passport'

let router = new Router({
  prefix: '/users'
})

// router.post('/signup', async (ctx,next) => {
//   const {
//     username,
//     password,
//     email
//   } = ctx.request.body;
//   let user = await User.find({
//     username
//   })
//   if (user.length) {
//     ctx.body = {
//       code: -1,
//       msg: '已被注册'
//     }
//     return
//   }
//   let nuser = await User.create({
//     username,
//     password,
//     email
//   })
//   if (nuser) {
//     return Passport.authenticate('local', function (err, user, info, status) {
//       if (err) {
//         ctx.body = {
//           code: -1,
//           msg: err
//         }
//       } else {
//         if (user) {
//           ctx.body = {
//             code: 0,
//             msg: '登录成功',
//             user
//           }
//           console.log(ctx)
//           return ctx.login(user)
//         } else {
//           ctx.body = {
//             code: 1,
//             msg: info
//           }
//         }
//       }
//     })(ctx, next)
//   } else {
//     ctx.body = {
//       code: -1,
//       msg: '注册失败'
//     }
//   }
// })



router.post('/signup', async (ctx, next) => {
  const {
    username,
    password,
    email
  } = ctx.request.body;
  let user = await User.find({
    username
  })
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '已被注册'
    }
    return
  }
  let nuser = await User.create({
    username,
    password,
    email
  })
  if (nuser) {
    ctx.body = {
      code: 0,
      msg: '注册成功'
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})

router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', function (err, user, info, status) {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})

router.get('/getUser', async (ctx) => {
  if (ctx.isAuthenticated()) {
    const {username, email} = ctx.session.passport.user
    ctx.body={
      user:username,
      email
    }
  }else{
    ctx.body={
      user:'',
      email:''
    }
  }
})

export default router
