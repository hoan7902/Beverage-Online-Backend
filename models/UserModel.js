const mongoose = require('mongoose');
const schema = new mongoose.Schema(
  {
    phoneNumber: {
      required: true,
      type: String,
    },
    password: {
      default: '',
      type: String,
    },
    userName: {
      default: '',
      type: String,
    },
    avatar: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    birthDate: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    code: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model('User', schema);
module.exports = UserModel;
