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

// LOGIN function
const logIn = async(req,res)=>{
    try{
        const {userName,password}= req.body
        const user = User.find({userName:userName}) // checking to see if username exists
        if(!user)
        res.json({msg:'this user name does not exist'})
        else if(user.password!==password){ // wrong password
            res.json({msg:'incorrect password'})
        }
        else
        res.json({msg:'signing in successfull!!',data:userName})

    }
    catch(error){
        console.error(error)
    }
}
module.exports = {
    signUp,
    logIn

}

