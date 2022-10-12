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
                productId: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                image: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                popular: {
                    type: Number,
                    required: true,
                },
                toppings: [
                    {
                        name: String,
                        price: Number,
                        image: String,
                        quantity: Number,
                    },
                ],
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
        description: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true,
    }
);
const OrderModel = mongoose.model('Order', schema);
module.exports = OrderModel;
