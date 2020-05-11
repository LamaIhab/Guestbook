const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
       
      }, // signed in user can only post a message
      description:{
          type:'String',
          required:true
      },
      time:{
          type:Date,
          required:true,
          default:Date.now() // when message is created

      }


})

module.exports = Message = mongoose.model('messages',messageSchema)