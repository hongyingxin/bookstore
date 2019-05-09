/* eslint-disable */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId,Mixed} = Schema.Types

const ListBookSchema = new Schema({
  bookId:{
    unique: true,
    type: String
  },
  bookname: String,
  another_name: Mixed,
  images: String,
  information: Mixed,
  nationality: Mixed,
  author: Mixed,
  press: Mixed,
  year: Mixed,
  price: Mixed,
  grade: Number,
  grade_number: String,
  detail: String,
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
ListBookSchema.pre('save', function(next) {
  if(this.isNew){
      this.meta.createdAt = this.meta.updatedAt = Date.now()
  }else{
      this.meta.updatedAt = Date.now()
  }

  next()
})

module.exports = mongoose.model('Listbook', ListBookSchema)
