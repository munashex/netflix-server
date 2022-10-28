const {getToken} = require('../../../auth/jwtToken')
const bcrypt = require('bcryptjs')

const signIn = async(_, {input}, { userSchema}) => { 

 

 const checkUser = await userSchema.findOne({email: input.email}) 
 const checkPassword = bcrypt.compareSync(input.password, checkUser.password) 

 if(!checkUser || !checkPassword) {throw new Error('wrong email and password')}

 let user = await userSchema.findOne({email: input.email}) 

 return {
    user, 
    token: getToken(user)
 }
}

module.exports = {signIn}