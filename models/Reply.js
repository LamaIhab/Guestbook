const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
  username: {
    type: "String",
    required: "true"
  },
  description: {
    type: "String",
    required: "true"
  },
  date: {
    type: Date,
    required: false,
    default: Date()
  },
  messageID: {
    type: "String",
    required: true // will be handled in front end more
  }
});
module.exports = Reply = mongoose.model("replies", replySchema);
