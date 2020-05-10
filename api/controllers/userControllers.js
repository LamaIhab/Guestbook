const express = require('express')
const mongoose = require('mongoose')
const User = require('../../models/User')
const Validation = require('../../Validations/userValidations')
 const{
     signUpVal
 } = Validation

//functions of user

// create a new user (sign up)
const signUp = async(req,res) =>{
    try{
        //console.log(req.body)
  const validate = signUpVal(req.body)
  if(validate.error){
     
      return res.status(400).send({ error: validate.error.details[0].message })
  }
  const newUser = await User.create(req.body)
  res.json({msg:'Signing up was successful',data:newUser})
  
    }
    catch(error){
        console.error(error)
    }

}
module.exports = {
    signUp,

}

