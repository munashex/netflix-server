const mongoose = require('mongoose') 


const userSchema = new mongoose.Schema({
    name: {
        type: String
    }, 
    email: {
        type: String, 
        unique: true
    },
    password: {
        type: String
    }, 
    memberSince: {
        type: Date, 
        default: new Date().toISOString()
    }
})

module.exports = mongoose.model("Users", userSchema) 
