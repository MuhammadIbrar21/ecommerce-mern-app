const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    totalQuantity: Number,
    category: {
        type: String,
        lowercase: true,
        required: true,
    },
    images: String
})

const Product = new mongoose.model('Product', productSchema)

module.exports = Product