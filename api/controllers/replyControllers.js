const mongoose = require('mongoose')
const Reply = require('../../models/Reply')
const Message = require('../../models/Message')
const User = require('../../models/User')

// post a reply to a specific message
const postReply = async(req,res)=>{
    try{
        if(req.body.username===undefined) // not signed in
        return res.json({msg:'please sign in/sign up to reply to a message'})
        const message = await Message.findById(req.params.id)
        if(!message)
        return res.json({msg:'message does not exist'})
        const {username,description} = req.body
        const reply = await Reply.create({username:username,description:description,messageID:req.params.id})
        return res.json({msg:'reply was posted successfully',data:reply})


    }
    catch(error){
        console.error(error)
    }
}

// get reply of specific message
const getReplies = async(req,res)=>{
    try{
        const message = await Message.findById(req.params.id)
        if(!message)
        return res.json({msg:'message does not exist or deleted'})
        const replies = await Reply.find({messageID:req.params.id})
        return res.json({data:replies})
    }
    catch(error){
        console.error(error)
    }
}

module.exports={
    postReply,
    getReplies
}