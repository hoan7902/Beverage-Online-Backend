const client = require('../models/RedisModel');
const ProductModel = require('../models/ProductModel');
class CartController {
  async addToCart(req, res) {
    try {
      const { productId, quantity, userId, listTopping } = req.body;
      const cartItem = JSON.stringify({
        quantity: quantity,
        listTopping: listTopping,
      });
      await client.hmset(`user::${userId}`, productId, cartItem);
      res.status(200).send({
        code: 1001,
        message: 'Add to cart success',
      });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async getAllCart(req, res) {
    try {
      const { userId } = req.query;
      await client.hgetall(`user::${userId}`, async (err, result) => {
        if (err) res.status(500).send({ error: err });
        else {
          const listProductId = result ? Object.keys(result) : [];
          let listProductInformation = await ProductModel.find({
            _id: {
              $in: listProductId,
            },
          }).select('name price image popular');
          const listProductResponse = listProductInformation.map((item) => {
            const valueOfKey = JSON.parse(result[item._id]);
            const quantityOfProduct = valueOfKey.quantity;
            const listTopping = valueOfKey.listTopping;

            const product = {
              product: item,
              quantity: quantityOfProduct,
              listTopping: listTopping,
            };
            return product;
          });
          res.status(200).send({
            code: 1002,
            message: 'Get cart success',
            data: listProductResponse,
          });
        }
      });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
  async removeFromCart(req, res) {
    try {
      const { productId, userId } = req.body;
      await client.hdel(`user::${userId}`, productId);
      res.status(200).send({
        code: 1003,
        message: 'remove success',
      });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = new CartController();
