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
        } catch (error) {}
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
        } catch (error) {}
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
        } catch (error) {}
    };
}
module.exports = new ToppingController();
