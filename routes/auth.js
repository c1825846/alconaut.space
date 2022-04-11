const {Router} = require('express')
const router = new Router()
const mongoose = require("mongoose")

router.post('/register', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: 'Serverside error'})
    }
})

module.exports = router