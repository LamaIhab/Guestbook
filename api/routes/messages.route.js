const express = require('express')
const messages = require('../controllers/messageControllers')

const router = express.Router()

router.post('./postMessage',messages.postMessage)
module.exports = router