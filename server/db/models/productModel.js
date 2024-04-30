const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const validator = require('validator');

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    totalQuantity: Number,
    type: String,
    images: String
})