const express = require('express');
const User = require('../db/models/usersModel')

const router = express.Router()

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router