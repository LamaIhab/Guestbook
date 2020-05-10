const express = require('express')
const mongoose = require('mongoose')
const User = require('../../models/User')

//functions of user

// create a new user (sign up)
const signUp = async(req,res) =>{
    try{
  const {displayName,userName,password} = req.body
  const newAdmin = await User.create(req.body)
  res.json({msg:'Signing up was successful',data:newAdmin})
    }
    catch(error){
        console.error(error)
    }

}