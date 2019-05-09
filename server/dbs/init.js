/* eslint-disable */
const Mongoose = require('mongoose')
const db = 'mongodb://localhost/book'
/**
 * 连接
 */
Mongoose.connect(db)
/**
 * 连接成功
 */
Mongoose.connection.on('connected', () => {
  console.log(`Mongoose connection Success`)
})
/**
 * 连接异常
 */
Mongoose.connection.on('error', err => {
  console.log(`Mongoose connection error ${err}`)
  process.exit(1)
})
/**
 * 连接断开
 */
Mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose connection disconnected`)
})

module.exports = Mongoose