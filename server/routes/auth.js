const express = require('express');
const User = require('../db/models/usersModel');
const router = express.Router();

router.post('/register', async (req, res) => {

    const newUser = new User(req.body);
    await newUser.save();

})

router.post('/login', async (req, res) => {

    let userFind = await User.findOne(req.body);

    if (userFind) {
        res.json(userFind)
    }

})

module.exports = router;