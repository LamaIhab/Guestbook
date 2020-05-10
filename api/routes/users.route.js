const express = require('express')
const users = require('../controllers/userControllers')

const router = express.Router()

router.post('/signUp',users.signUp)

module.exports = router