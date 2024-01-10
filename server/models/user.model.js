const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, "Vui lòng điền đầy đủ tên!"],
    },
    phonenumber: {
      type: String,
      require: [true, "Vui lòng nhập số điện thoại!"],
    },
    birthday: {
      type: Date,
    },
    gender: {
      type: String,
    },
    email: {
      type: String,
      require: [true, "Vui lòng nhập email!"],
    },
    password: {
      type: String,
      require: [true, "Vui lòng nhập mật khẩu của bạn"],
    },
    role: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
