const OrderModel = require('../models/OrderModel');
const ProductModel = require('../models/ProductModel');
const UserModel = require('../models/UserModel');
class ProductController {
  //------- create a new Order ---------------
  addOrder = async (req, res) => {
    try {
      const {
        phoneNumber,
        userName,
        listProduct,
        totalPrice,
        isPay,
        status,
        address,
        userId,
        description,
      } = req.body;
      const user = UserModel.findById(userId);
      if (user) {
        const newOrder = new OrderModel({
          phoneNumber,
          userName,
          listProduct,
          totalPrice,
          isPay,
          status,
          address,
          userId,
          description,
        });
        await newOrder.save();
        const response = {
          code: 401,
          message: 'Create new Order success',
        };
        res.status(200).send(response);
      } else {
        const response = {
          code: 407,
          message: 'This user is not exist',
        };
        res.status(200).send(response);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
  //--------- Update a Order ---------------
  updateOrder = async (req, res) => {
    try {
      const { status, orderId, userId } = req.body;
      const user = await UserModel.findById(userId);
      if (user && user.admin) {
        await OrderModel.findByIdAndUpdate(orderId, { status: status });
        const response = {
          code: 402,
          message: 'Update status Order success',
        };
        res.status(200).send(response);
      } else {
        const response = {
          code: 403,
          message: 'Your account is not permissions to update Order',
        };
        res.status(200).send(response);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
  //------- Complete order ---------------

  completeOrder = async (req, res) => {
    try {
      const { userId, orderId } = req.body;
      const user = await UserModel.findById(userId);
      const order = await OrderModel.findById(orderId);
      if (user && (user.admin || order.userId === userId)) {
        if (order.status === 'delivering') {
          order.status = 'complete';
          await order.save();
          order.listProduct.forEach((item) =>
            ProductModel.findByIdAndUpdate(item.productId, {
              popular: item.popular++,
            })
          );
          const response = {
            code: 402,
            message: 'Update status Order success',
          };
          res.status(200).send(response);
        } else {
          const response = {
            code: 404,
            message: 'Status of order must be delivering',
          };
          res.status(200).send(response);
        }
      } else {
        const response = {
          code: 403,
          message: 'Your account is not permissions to update Order',
        };
        res.status(200).send(response);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
  //------- Get order with status order ------------------------------

  getOrderWithStatus = async (req, res) => {
    try {
      const { userId, status } = req.body;
      const user = await UserModel.findById(userId);
      if (user && user.admin) {
        const listOrder = await OrderModel.find({ status: status });
        const pageResponse = {
          listOrder: listOrder,
        };
        const response = {
          code: 405,
          message: 'Get list order success',
          data: pageResponse,
        };
        res.status(200).send(response);
      } else if (user) {
        if (status === 'complete') {
          const listOrder = await OrderModel.find({
            userId: user._id,
            status: status,
          });
          const pageResponse = {
            listOrder: listOrder,
          };
          const response = {
            code: 405,
            message: 'Get list order success',
            data: pageResponse,
          };
          res.status(200).send(response);
        } else {
          const listOrder = await OrderModel.find({
            userId: user._id,
            status: { $ne: status },
          });
          const pageResponse = {
            listOrder: listOrder,
          };
          const response = {
            code: 405,
            message: 'Get list order success',
            data: pageResponse,
          };
          res.status(200).send(response);
        }
      } else {
        res.status(400).send({ code: 404, message: 'Not Found user' });
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  //--------- delete order ------------------------
  deleteOrder = async function (req, res) {
    try {
      const { orderId, userId } = req.body;
      const user = await UserModel.findById(userId);
      if (user && user.admin) {
        await OrderModel.findByIdAndDelete(orderId);
        const response = {
          code: 406,
          message: 'Delete status Order success',
        };
        res.status(200).send(response);
      } else {
        const response = {
          code: 407,
          message: 'Your account is not permissions to delete Order',
        };
        res.status(200).send(response);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}

module.exports = new ProductController();
