const user = require('./user');
const route = (app) => {
    app.use('/user', user);
};
module.exports = route;
