const user = require('./user');
const product = require('./product');
const route = (app) => {
    app.use('/user', user);
    app.use('/product', product);
};
module.exports = route;
