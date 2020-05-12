const express = require('express')
const router = express.Router()
const replies = require('../controllers/replyControllers')

router.post('/postReply/:id',replies.postReply)
router.get('/getReplies/:id',replies.getReplies)

module.exports= router