const Joi = require('joi')

// creating validations for signing up using joi
const signUpVal = request=>{
    const userData = {
        displayName:Joi.string().required(),
        userName:Joi.string().min(3).required(),
        password:Joi.string().min(6).required()
    }
    return Joi.validate(request,userData)
}
module.exports = {
    signUpVal
}