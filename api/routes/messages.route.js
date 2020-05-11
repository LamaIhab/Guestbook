const express = require('express')
const messages = require('../controllers/messageControllers')

const router = express.Router()

router.post('/postMessage',messages.postMessage)
router.put('/editMessage/:id',messages.editMessage)
router.get('/getMessages',messages.getAllMessages)
router.delete('/deleteMessage/:id',messages.deleteMessage) 
module.exports = router