const express = require('express');
const User = require('../db/models/usersModel')
const Product = require('../db/models/productModel')
const multer = require('multer')
const fs = require('fs')
const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, next) {

        let folderPath = './server/productImages/' + req.body.category + '-' + req.body.name;
        next(null, folderPath);

    },
    filename: function (req, file, next) {
        next(null, file.originalname);
    }
})

const upload = multer({ storage })

router.post('/setup-folder', (req, res) => {

    let folderPath = './server/productImages/' + req.body.category + '-' + req.body.name;

    let folderExist = fs.existsSync(folderPath)

    if (!folderExist) {
        fs.mkdirSync(folderPath)
        res.json({ success: true })
    } else {
        res.json({ success: false })
    }

})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err);
    }
})

router.post('/add-product', upload.single('images'), async (req, res) => {
    try {
        let product = req.body
        product.images = "/" + req.file.originalname
        let newProduct = new Product(product)
        await newProduct.save();
        res.json({ success: true })

    } catch (err) {
        res.status(500).send(err)
    }

})

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.json(err);
    }
})


module.exports = router