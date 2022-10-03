const user = require('./user');
const product = require('./product');
const order = require('./order');
const catetogory = require('./category');
const route = (app) => {
    app.use('/user', user);
    app.use('/product', product);
    app.use('/order', order);
    app.use('/catetogory', catetogory);
};
module.exports = route;
