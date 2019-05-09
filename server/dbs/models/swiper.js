/* eslint-disable */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId,Mixed} = Schema.Types

const SwiperSchema = new Schema({
  swiperId:{
    unique: true,
    type: String
  },
  swiperLink: Mixed,
  swiperImg: Mixed,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})
/*更新时间*/ 
SwiperSchema.pre('save', function(next) {
  if(this.isNew){
      this.meta.createdAt = this.meta.updatedAt = Date.now()
  }else{
      this.meta.updatedAt = Date.now()
  }

  next()
})

module.exports = mongoose.model('Swiper', SwiperSchema)
