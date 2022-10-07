const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
        price: {
            type: Number,
            required: true,
        },
        typeId: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const ProductModel = mongoose.model('Product', schema);
module.exports = ProductModel;
