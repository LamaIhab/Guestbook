const express = require('express')
const mongoose = require('mongoose')
const User = require('../../models/User')
const signUpValidation = require('../../Validations/userValidations').signUpValidation

//functions of user

// create a new user (sign up)
const signUp = async(req,res) =>{
    try{
  const validate = signUpValidation(req.body)
  if(validate.error){
      return res.status(400).send({ error: isValidated.error.details[0].message })
  }
  const newAdmin = await User.create(req.body)
  res.json({msg:'Signing up was successful',data:newAdmin})
    }
    catch(error){
        console.error(error)
    }

}