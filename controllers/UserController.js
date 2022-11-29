const UserModel = require('../models/UserModel');
const twilio = require('twilio');
class UserController {
  //---------- Login to system --------------------
  loginUser = async (req, res) => {
    try {
      const { phoneNumber, password } = req.body;

      const user = await UserModel.findOne({
        phoneNumber: phoneNumber,
      });
      if (user) {
        //---------- user exists----------
        if (user.password === password) {
          //------------- user if not comfirm -------------------------
          if (!user.isActive) {
            const dataRespone = {
              userId: user._id,
            };
            const respone = {
              code: 101,
              message: 'User is not verify',
              data: dataRespone,
            };
            res.status(200).send(respone);
          } else {
            //---------- Login successful --------------------
            const dataRespone = {
              user: { ...user.toObject(), password: '' },
            };
            const respone = {
              code: 102,
              message: 'Login successful',
              data: dataRespone,
            };
            res.status(200).send(respone);
          }
        } else {
          const respone = {
            code: 103,
            message: 'Login failed, your password is not correct',
          };
          res.status(200).send(respone);
        }
      } else {
        //---------- user is not exists -------------
        const respone = {
          code: 110,
          message: 'User is not exist, please register',
        };
        res.status(200).send(respone);
      }
    } catch (error) {
      res.send({ message: error.message });
    }
  };
  //------- Forgot password ----------------
  forgotPassword = async function (req, res) {
    try {
      const { phoneNumber } = req.body;
      const user = await UserModel.findOne({ phoneNumber: phoneNumber });
      if (user) {
        const code = Math.floor(Math.random() * 10000000);
        user.password = code;
        await user.save();
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;

        const client = twilio(accountSid, authToken);
        client.messages
          .create({
            body: `Your code is ${code}`,
            from: '+13148606925',
            to: '+84981346154',
          })
          .then(() => {
            const dataResponse = {
              phoneNumber: phoneNumber,
            };
            const respone = {
              code: 119,
              message: 'Your password was sent to your phone number',
              data: dataResponse,
            };
            res.status(200).send(respone);
          })
          .catch((err) => {
            res.status(200).send({
              message: err.message,
            });
          });
      } else {
        const respone = {
          code: 119,
          message: 'Your phone number is not correct',
        };
        res.status(200).send(respone);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
  //------- Create User ----------------
  createUser = async function (req, res) {
    try {
      const { phoneNumber, password } = req.body;
      const user = await UserModel.findOne({ phoneNumber: phoneNumber });
      if (!user) {
        const code = Math.floor(Math.random() * 100000);
        const newUser = new UserModel({ phoneNumber, password, code });
        await newUser.save();
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;

        const client = twilio(accountSid, authToken);
        client.messages
          .create({
            body: `Your code is ${code}`,
            from: '+13148606925',
            to: '+84981346154',
          })
          .then(() => {
            const dataResponse = {
              phoneNumber: phoneNumber,
            };
            const respone = {
              code: 118,
              message: 'Please verify',
              data: dataResponse,
            };
            res.status(200).send(respone);
          })
          .catch((err) => {
            res.status(200).send({
              message: err.message,
            });
          });
      } else {
        if (!user.isActive) {
          const code = Math.floor(Math.random() * 100000);
          await user.update({ code: code });

          const accountSid = process.env.TWILIO_ACCOUNT_SID;
          const authToken = process.env.TWILIO_AUTH_TOKEN;
          const client = twilio(accountSid, authToken);
          client.messages
            .create({
              body: `Your code is ${code}`,
              from: '+13148606925',
              to: '+84981346154',
            })
            .then(() => {
              const dataResponse = {
                phoneNumber: phoneNumber,
              };
              const respone = {
                code: 111,
                message: 'Please verify',
                data: dataResponse,
              };
              res.status(200).send(respone);
            })
            .catch((err) => {
              res.status(200).send({
                message: err.message,
              });
            });
        } else {
          const respone = {
            code: 112,
            message: 'Phone Number was used',
          };
          res.status(200).send(respone);
        }
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
  //------- verify the phone number ----------------
  verifyPhoneNumber = async (req, res) => {
    try {
      const { phoneNumber, code } = req.body;
      const user = await UserModel.findOne({ phoneNumber: phoneNumber });
      if (user) {
        if (user.code === code) {
          user.isActive = true;
          await user.save();
          const respone = {
            code: 116,
            message: 'Register successfully',
          };
          res.status(200).send(respone);
        } else {
          const respone = {
            code: 117,
            message: 'Your code is not correct',
            data: user,
          };
          res.status(200).send(respone);
        }
      } else {
        const respone = {
          code: 119,
          message: 'Your phone number is not correct',
        };
        res.status(200).send(respone);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
  //--------- Update user information --------------------------------
  updateInforUser = async (req, res) => {
    try {
      const { userId, email, birthDate } = req.body;
      const user = await UserModel.findById(userId);
      user.birthDate = birthDate;
      user.email = email;
      await user.save();
      const dataRespone = {
        user: { ...user.toObject(), password: '' },
      };
      const respone = {
        code: 111,
        message: 'Update your information success',
        data: dataRespone,
      };
      res.status(200).send(respone);
    } catch (error) {
      res.send({ message: error.message });
    }
  };
  //---------- Change Password --------------------------------
  changePassword = async (req, res) => {
    try {
      const { phoneNumber, password, newPassword } = req.body;

      const user = await UserModel.findOne({ phoneNumber, password });
      if (user) {
        if (newPassword === password) {
          const respone = {
            code: 113,
            message: 'New password is not equal current password',
          };
          res.status(200).send(respone);
        } else {
          user.password = newPassword;
          await user.save();
          const respone = {
            code: 112,
            message: 'Change your password success',
          };
          res.status(200).send(respone);
        }
      } else {
        const respone = {
          code: 114,
          message: 'Please retype your password, your password is not correct',
        };
        res.status(200).send(respone);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
  //------- Get detail user information   --------------------------------
  getDetailUser = async function (req, res) {
    try {
      const { userId } = req.body;
      const user = await UserModel.findById(userId);
      if (user) {
        const dataRespone = {
          user: { ...user.toObject(), password: '' },
        };
        const respone = {
          code: 102,
          message: 'Login successful',
          data: dataRespone,
        };
        res.status(200).send(respone);
      } else {
        const respone = {
          code: 115,
          message: 'No user have this userId',
        };
        res.status(200).send(respone);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}
module.exports = new UserController();
