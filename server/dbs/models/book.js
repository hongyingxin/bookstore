/* eslint-disable */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId,Mixed} = Schema.Types

const BookSchema = new Schema({
  kind: Mixed,
  kindChild: Array,
  bookId:{
    unique: true,
    type: String
  },
  image: String,
  title: String,
  author: String,
  detail: String,
  grade: Mixed,
  gradeNumber: String,
  words: String,
  isDfree: Boolean,
  isNewbook: Boolean,
  isPromotion: Boolean,
  isRebate: Boolean,
  fixedPrice: Mixed,
  salesPrice: Mixed,
  onSaleTime: Mixed,
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
BookSchema.pre('save', function(next) {
  if(this.isNew){
      this.meta.createdAt = this.meta.updatedAt = Date.now()
  }else{
      this.meta.updatedAt = Date.now()
  }

  next()
})

module.exports = mongoose.model('Book', BookSchema)
