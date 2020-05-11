const express = require('express')
const mongoose = require('mongoose')
const Message = require('../../models/Message')
const User = require('../../models/User')

// create a new message

const postMessage = async(req,res)=>{
    try{
        if(req.body.username=== undefined)
        return res.json({msg:'you are not signed in to post a message, please sign in/sign up'})
        const user = await User.find({userName:req.body.username}) // check to see if i'm signed in before posting a message
        if(user.length===0){
           return res.json({msg:'username does not exist'})
        }
        const newMessage = await Message.create(req.body)
       return res.json({msg:'Message posted successfully!!',data:newMessage})    




    }
    catch(error){
        console.error(error)
    }

}

// edit message
const editMessage = async(req,res)=>{

    try{
        message = await Message.findById(req.params.id)
        if(!message)
       return res.json({msg:'this message does not exist'})
       else{
           if(req.body.username===undefined)
           return res.json({msg:'you are not signed in to post a message, please sign in/sign up'})
           const user = req.body.username // get username of signed in user to access editing of message
           if(message.username!==user)
           return res.json({msg:'you can only edit your own message'})
           else{
               const updatedMessage = await Message.findByIdAndUpdate(req.params.id,req.body)
               return res.json({msg:'Message updated successfully',data:updatedMessage})
           }

       }

    }
    catch(error){
        console.error(error)
    }
}

// get all messages


// delete a message
module.exports={
    postMessage,
    editMessage
}