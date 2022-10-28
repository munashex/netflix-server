const {signUp} = require('./Mutations/signup')
const {signIn} = require('./Mutations/signin')

const  resolvers = {
Query: {

}, 

Mutation : {
 signUp, 
 signIn,
},

User: {
    id: ({_id}) => _id
}

}

module.exports = {resolvers}