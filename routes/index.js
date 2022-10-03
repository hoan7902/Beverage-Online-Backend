const user = require('./user');
const product = require('./product');
const order = require('./order');
const catetogory = require('./category');
const topping = require('./topping');
const route = (app) => {
    app.use('/user', user);
    app.use('/product', product);
    app.use('/order', order);
    app.use('/catetogory', catetogory);

    app.use('/topping', topping);
};
module.exports = route;
