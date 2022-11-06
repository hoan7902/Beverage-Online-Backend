const user = require('./user');
const product = require('./product');
const order = require('./order');
const category = require('./category');
const topping = require('./topping');
const cart = require('./cart');
const route = (app) => {
  app.use('/user', user);
  app.use('/product', product);
  app.use('/order', order);
  app.use('/category', category);

  app.use('/topping', topping);

  app.use('/cart', cart);
  app.use('/', (req, res) => {
    res.status(200).send({ message: 'Success to connect alo' });
  });
};
module.exports = route;
