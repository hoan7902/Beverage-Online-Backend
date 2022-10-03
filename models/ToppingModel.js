const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        default: '',
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    typeId: {
        type: String,
        required: true,
    },
});
const ToppingModel = mongoose.model('Topping', schema);
module.exports = ToppingModel;
