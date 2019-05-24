// const Koa = require('koa')
import Koa from 'Koa'
import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session'
import Redis from 'koa-redis'
import json from 'koa-json'
import mongooose from './dbs/init'
import passport from './utils/passport'
import book from './interface/book'
import classify from './interface/products'
import user from './interface/user'
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()



// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(bodyParser({
    extendTypes:['json','form','text']
  }))
  app.keys = ['mt','keysheys']
  app.proxy = true
  app.use(session({key: 'mt', prefix: 'mt:uid', store: new Redis()}))
  app.use(json())
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(book.routes()).use(book.allowedMethods())
  app.use(classify.routes()).use(classify.allowedMethods())
  app.use(user.routes()).use(user.allowedMethods())
  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
