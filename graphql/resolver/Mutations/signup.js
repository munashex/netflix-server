const userSchema = require('../../../Models/user') 
const {getToken} = require('../../../auth/jwtToken')
const bcrypt = require('bcryptjs')

const signUp = async (_, {input}) => {   
    
    let Checkuser = await userSchema.findOne({email: input.email}) 
     if(Checkuser) {throw new Error('user already exits')}  

     let hashedPassword = bcrypt.hashSync(input.password)

    const user = new userSchema({
        ...input,
        password: hashedPassword
    }) 
 
    await user.save()
     return {
        user,
        token: getToken(user)
     }
}

module.exports = {signUp}
