const mongoose = require('mongoose');
const schema = new mongoose.Schema(
   {
      phoneNumber: {
         required: true,
         type: String,
      },
      password: {
         required: true,
         type: String,
      },
      userName: {
         type: String,
         required: true,
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
   },
   { timestamps: true }
);
const UserModel = mongoose.model('User', schema);
module.exports = UserModel;
