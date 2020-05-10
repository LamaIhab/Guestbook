const joi = require('joi')

// creating validations for signing up using joi
const signUp = request=>{
    const userData = {
        displayName:joi.string().required(),
        username:joi.string().min(3).unique().required(),
        password:joi.string().min(6).required()
    }
    return joi.validate(request,userData)
}
module.exports = {
    signUp
}