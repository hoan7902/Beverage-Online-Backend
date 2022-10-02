const user = require('./user');
const product = require('./product');
const order = require('./order');
const route = (app) => {
    app.use('/user', user);
    app.use('/product', product);
    app.use('/order', order);
};
module.exports = route;
