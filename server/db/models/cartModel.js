const mongoose = require('mongoose')

let cartSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: Number,
    totalQuantity: Number,
    category: String,
    images: String,
    price: Number
})

const CartItem = new mongoose.model('CartItem', cartSchema);

module.exports = CartItem;