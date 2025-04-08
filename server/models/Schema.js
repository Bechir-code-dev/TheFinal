const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  num: { type: Number, required: true },
  image: { type: String },
});
const User = mongoose.model("user", userSchema);
module.exports = { User };
// schema done
