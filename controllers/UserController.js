const UserModel = require('../models/UserModel');

class UserController {
   checkUser = async (req, res) => {
      try {
         const phoneNumber = req.body.phoneNumber;
         const user = await UserModel.findOne({ phoneNumber: phoneNumber });
         if (!user) {
            const data = new UserModel({
               phoneNumber: phoneNumber,
               password: 'phuc0936155228',
               userName: 'cao luong phuc',
            });
            await data.save();
            const respone = {
               code: 101,
               message: 'The phone number is new',
            };
            res.status(200).send(respone);
         } else {
            const respone = {
               code: 102,
               message: 'User Exist',
            };
            res.status(200).send(respone);
         }
      } catch (error) {
         res.send({ message: error });
      }
   };
}
module.exports = new UserController();
