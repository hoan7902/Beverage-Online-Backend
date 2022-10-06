const CategoryModel = require('../models/CategoryModel');
const ProductModel = require('../models/ProductModel');
const UserModel = require('../models/UserModel');

class CategoryController {
    //------- Add a new category ----------------
    addCategory = async (req, res) => {
        try {
            const { name, description, userId } = req.body;
            const user = await UserModel.findById(userId);
            if (user.admin) {
                const newCategory = new CategoryModel({ name, description });
                await newCategory.save();
                const response = {
                    code: 501,
                    message: 'Add category success',
                };
                res.status(200).send(response);
            } else {
                const response = {
                    code: 503,
                    message:
                        'Your account is not permissions to add this category',
                };
                res.status(200).send(response);
            }
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    };
    //------- Update category --------------------------------
    updateCategory = async (req, res) => {
        try {
            const { name, description, categoryId, userId } = req.body;
            const user = await UserModel.findById(userId);
            if (user.admin) {
                await CategoryModel.findByIdAndUpdate(categoryId, {
                    name,
                    description,
                });
                const response = {
                    code: 502,
                    message: 'Update category success',
                };
                res.status(200).send(response);
            } else {
                const response = {
                    code: 504,
                    message:
                        'Your account is not permissions to update this category',
                };
                res.status(200).send(response);
            }
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    };
    //-------- Delete category --------------------
    deleteCategory = async (req, res) => {
        try {
            const { categoryId, userId } = req.body;
            const user = await UserModel.findById(userId);
            if (user.admin) {
                const listProduct = await ProductModel.find({
                    typeId: categoryId,
                });
                listProduct.forEach((item) => {
                    item.delete();
                });
                await CategoryModel.findByIdAndDelete(categoryId);
                const response = {
                    code: 505,
                    message: 'Delete category success',
                };
                res.status(200).send(response);
            } else {
                const response = {
                    code: 506,
                    message:
                        'Your account is not permissions to delete this category',
                };
                res.status(200).send(response);
            }
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    };
    //------- Get all ---------------
    getAll = async function (req, res) {
        try {
            const listCategory = await CategoryModel.find({});
            const dataResponse = {
                listCategory: listCategory,
            };
            const response = {
                code: 507,
                message: 'Get all categories successfully',
                data: dataResponse,
            };
            res.status(200).send(response);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    };
}

module.exports = new CategoryController();
