const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/dbcommerceapp')
//     .then(() => console.log('db connected successfully'))
//     .catch(() => console.log('db failed to connect!'))


mongoose.connect('mongodb+srv://mribrar3344:mribrar3344@clusterforexpresspart3.hsnbfmb.mongodb.net/')
    .then(() => console.log('db connection successful'))
    .catch((err) => console.log(err))