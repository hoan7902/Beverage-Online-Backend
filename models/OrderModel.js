const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        phoneNumber: {
            required: true,
            type: String,
        },
        userName: {
            required: true,
            type: String,
        },
        listProduct: [
            {
                name: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                size: {
                    type: String,
                    default: 'S',
                },
                image: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
        totalPrice: {
            required: true,
            type: Number,
        },
        isPay: {
            required: true,
            type: Boolean,
        },
        status: {
            default: 'pending',
            type: String,
        },
        address: {
            required: true,
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
const OrderModel = mongoose.model('Order', schema);
module.exports = OrderModel;
