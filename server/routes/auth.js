const express = require('express');
const User = require('../db/models/usersModel');
const jsonToken = require('jsonwebtoken');
const router = express.Router();

router.post('/session', (req, res) => {

    try {
        if (req.body.token) {
            jsonToken.verify(req.body.token, 'cat says hi in faisalabad', async (err, data) => {
                const user = await User.findById(data.id)
                res.json(user)
            })
        } else {
            res.json(null)
        }
    } catch (err) {
        console.log(err);
    }

})

router.post('/register', async (req, res) => {

    const newUser = new User(req.body);
    await newUser.save();

})

router.post('/login', async (req, res) => {

    let isChecked = req.body.isChecked
    delete req.body.isChecked
    let userFind = await User.findOne(req.body);

    userFind.isChecked = isChecked;
    if (isChecked == true) {
        jsonToken.sign({ id: userFind._id }, "cat says hi in faisalabad", { expiresIn: '1d' }, (err, token) => {
            res.json({
                userFind,
                token
            })
        })
    }

    if (isChecked == false) {
        res.json({ userFind })
    }
})


module.exports = router;