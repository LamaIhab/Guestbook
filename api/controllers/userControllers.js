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
     
      //return res.status(400).send({ error: validate.error.details[0].message })
      return res.json({msg:validate.error.details[0].message })
  }
  const newUser = await User.create(req.body)
  
  
  res.json({msg:'Signing up was successful',data:newUser})
  
    }
    catch(error){ // mongo error due to duplicate key as username is unique
        res.json({msg:'this username already exists'})
        
    }

}

// LOGIN function
const logIn = async(req,res)=>{
    try{
        const {userName,password}= req.body
        const user = await User.find({userName:userName}) // checking to see if username exists
        
        if(user.length===0){
        res.json({msg:'this user name does not exist'})}
       
        else {
            const password2 = user[0].password
            if(password2!==password){ // wrong password
            res.json({msg:'incorrect password'})}
            else
            res.json({msg:'signing in successfull!!',data:userName})
        }
    
     

    }
    catch(error){
        console.error(error)
    }
}
module.exports = {
    signUp,
    logIn

}

