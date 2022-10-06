const ToppingModel = require('../models/ToppingModel');
const UserModel = require('../models/UserModel');

class ToppingController {
    //------- Add a newTopping --------------------------------
    addTopping = async (req, res) => {
        try {
            const { name, description, price, image, typeId, userId } =
                req.body;
            const user = await UserModel.findById(userId);
            if (user.admin) {
                const newTopping = new ToppingModel({
                    name,
                    description,
                    price,
                    image,
                    typeId,
                });
                await newTopping.save();
                const response = {
                    code: 601,
                    message: 'Add topping successfully',
                };
                res.status(200).send(response);
            } else {
                const response = {
                    code: 602,
                    message:
                        'Your account is not permissions to add this Topping',
                };
                res.status(200).send(response);
            }
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    };
    //------- Update Topping --------------------------------
    updateTopping = async (req, res) => {
        try {
            const {
                name,
                description,
                price,
                image,
                typeId,
                userId,
                toppingId,
            } = req.body;
            const user = await UserModel.findById(userId);
            if (user.admin) {
                await ToppingModel.findByIdAndUpdate(toppingId, {
                    name,
                    description,
                    price,
                    image,
                    typeId,
                });
                const response = {
                    code: 603,
                    message: 'Update topping successfully',
                };
                res.status(200).send(response);
            } else {
                const response = {
                    code: 604,
                    message:
                        'Your account is not permissions to update this Topping',
                };
                res.status(200).send(response);
            }
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    };
    //------- Delete Topping --------------------------------
    deleteTopping = async (req, res) => {
        try {
            const { userId, toppingId } = req.body;
            const user = await UserModel.findById(userId);
            if (user.admin) {
                await ToppingModel.findByIdAndDelete(toppingId);
                const response = {
                    code: 605,
                    message: 'Delete topping successfully',
                };
                res.status(200).send(response);
            } else {
                const response = {
                    code: 606,
                    message:
                        'Your account is not permissions to delete this Topping',
                };
                res.status(200).send(response);
            }
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    };
    //--------- Get Topping --------------------
    getTopping = async function (req, res) {
        try {
            let { typeId } = req.query;
            if (typeId) {
                const listTopping = await ToppingModel.find({
                    typeId: typeId,
                });
                if (listTopping.length) {
                    const dataRespone = {
                        listTopping: listTopping,
                    };
                    const response = {
                        code: 607,
                        message: 'Get list topping successfully',
                        data: dataRespone,
                    };
                    res.status(200).send(response);
                } else {
                    const response = {
                        code: 608,
                        message: 'TypeId is not correct',
                    };
                    res.status(200).send(response);
                }
            } else {
                const listTopping = await ToppingModel.find({});
                const dataRespone = {
                    listTopping: listTopping,
                };
                const response = {
                    code: 607,
                    message: 'Get list topping successfully',
                    data: dataRespone,
                };
                res.status(200).send(response);
            }
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    };
}
module.exports = new ToppingController();
