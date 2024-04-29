const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbcommerceapp')
    .then(() => console.log('db connected successfully'))
    .catch(() => console.log('db failed to connect!'))