require('dotenv').config()   
const {JWT_SECRET} = process.env
const userSchema = require('../Models/user') 
const jwt = require('jsonwebtoken') 


const VerifyUser = async(token, userSchema) => { 
    if(!token) {
     return
    } 

   let tokenData = jwt.verify(token , JWT_SECRET) 
   if(!tokenData.id) {return} 
   
   return await userSchema.findOne({_id: tokenData.id})

}

module.exports = {VerifyUser}

