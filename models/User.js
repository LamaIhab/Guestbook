const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  displayName: {
    type: "String",
    required: true
  },
  userName: {
    type: "String",
    required: true,
    unique: true
  },
  password: {
    type: "String",
    required: true
  }
});

module.exports = User = mongoose.model("users", userSchema);
