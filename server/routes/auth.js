const express = require('express');
const User = require('../db/models/usersModel');
const jsonToken = require('jsonwebtoken');
const router = express.Router();

router.post('/register', async (req, res) => {

    const newUser = new User(req.body);
    await newUser.save();

})

router.post('/login', async (req, res) => {

    let userFind = await User.findOne(req.body);

    if (userFind) {
        jsonToken.sign({ id: userFind._id }, "cat says hi in faisalabad", { expiresIn: '1h' }, (err, token) => {
            res.json({
                userFind,
                token
            })
        })
    }
})

router.post('/session', async (req, res) => {

    try {
        if (req.body.token) {
            jsonToken.verify(req.body.token, 'cat says hi in faisalabad', (err, data) => {
                const user = User.findById({ _id: data.id })
                res.json(user)
            })
        } else {
            res.json(null)
        }
    } catch (err) {
        console.log(err);
    }

})

module.exports = router;