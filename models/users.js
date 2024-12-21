const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  Scheme: { type: String },
  PassedDate: { type: Date },
  EngName: { type: String },
})
const User = mongoose.model("User", userSchema)
module.exports = User
