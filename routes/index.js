const user = require('./user');
const product = require('./product');
const order = require('./order');
const category = require('./category');
const topping = require('./topping');
const route = (app) => {
    app.use('/user', user);
    app.use('/product', product);
    app.use('/order', order);
    app.use('/category', category);

    app.use('/topping', topping);
    app.use('/', (req, res) => {
<<<<<<< HEAD
        res.status(200).send({ message: 'Success to connect' });
=======
        res.status(200).send({ message: 'success' });
>>>>>>> 75ba47cc1afba528efe1def8b00201099ca72dfd
    });
};
module.exports = route;
