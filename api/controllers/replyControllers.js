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
        const reply = await Reply.create(req.body,{messageID:req.params.id})
        return res.json({msg:'reply was posted successfully',data:reply})


    }
    catch(error){
        console.error(error)
    }
}

module.exports={
    postReply
}