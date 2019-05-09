/* eslint-disable */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId,Mixed} = Schema.Types

const NewBookSchema = new Schema({
  bookId:{
    unique: true,
    type: String
  },
  images: String,
  title: String,
  grade: Number,
  author: String,
  press: String,
  year: Mixed,
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
NewBookSchema.pre('save', function(next) {
  if(this.isNew){
      this.meta.createdAt = this.meta.updatedAt = Date.now()
  }else{
      this.meta.updatedAt = Date.now()
  }

  next()
})

module.exports = mongoose.model('NewBook', NewBookSchema)
