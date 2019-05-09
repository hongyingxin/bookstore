/* eslint-disable */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId,Mixed} = Schema.Types

const DiarySchema = new Schema({
  diaryId:{
    unique: true,
    type: String
  },
  title: String,
  date: String,
  text: String,
  respond: String,
  htmlText: String,
  // classId:String,
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
DiarySchema.pre('save', function(next) {
  if(this.isNew){
      this.meta.createdAt = this.meta.updatedAt = Date.now()
  }else{
      this.meta.updatedAt = Date.now()
  }

  next()
})

module.exports = mongoose.model('Diary', DiarySchema)
