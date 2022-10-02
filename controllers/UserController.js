const UserModel = require('../models/UserModel');
class UserController {
    //---------- Login to system --------------------
    loginUser = async (req, res) => {
        try {
            const { phoneNumber, userId, password, userName } = req.body;

            //------------ create a new user --------------------
            if (userId && userName) {
                const user = await UserModel.findById(userId);
                user.userName = userName;
                user.isActive = true;
                await user.save();
                const dataRespone = {
                    user: { ...user.toObject(), password: '', isActive: true },
                };
                const respone = {
                    code: 102,
                    message: 'Login successful',
                    data: dataRespone,
                };
                res.status(200).send(respone);
            } else {
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
                                message:
                                    'User is not exist, please enter your name',
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
                            message:
                                'Login failed, your password is not correct',
                        };
                        res.status(200).send(respone);
                    }
                } else {
                    //---------- user is not exists -------------
                    const newUser = new UserModel({
                        phoneNumber: phoneNumber,
                        password: password,
                    });
                    await newUser.save();
                    const dataRespone = {
                        userId: newUser._id,
                    };
                    const respone = {
                        code: 101,
                        message: 'User is not exist, please enter your name',
                        data: dataRespone,
                    };
                    res.status(200).send(respone);
                }
            }
        } catch (error) {
            res.send({ message: error.message });
        }
    };
    //--------- Update user information --------------------------------
    updateInforUser = async (req, res) => {
        try {
            const { userId, avatar, userName, email, birthDate } = req.body;
            const user = await UserModel.findById(userId);
            user.avatar = avatar;
            user.userName = userName;
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
            const { userId, password, newPassword } = req.body;

            const user = await UserModel.findById(userId);
            if (user.password === password) {
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
                    message:
                        'Please retype your password, your password is not correct',
                };
                res.status(200).send(respone);
            }
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    };
}
module.exports = new UserController();
