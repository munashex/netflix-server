require('dotenv').config() 
const {JWT_SECRET} = process.env  
const jwt = require('jsonwebtoken')

const getToken = (user)  => jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: "30mins"})


module.exports = {getToken}