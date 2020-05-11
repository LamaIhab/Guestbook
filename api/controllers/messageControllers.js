const express = require('express')
const mongoose = require('mongoose')
const Message = require('./models/Message')
const User = require('./models/User')

// create a new message

const postMessage = async(req,res)=>{
    try{
        const user = await User.find({userName:req.body.userName}) // check to see if i'm signed in before posting a message
        if(user.length===0){
            res.json({msg:'you are not signed in to post a message, please sign in/sign up'})}
        const newMessage = await Message.create(req.body)
        res.json({msg:'Message posted successfully!!',data:newMessage})    




    }
    catch(error){
        console.error(error)
    }

}
module.exports={
    postMessage
}