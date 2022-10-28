const {ApolloServer, gql} = require('apollo-server') 
const mongoose = require('mongoose') 
const {typeDefs} = require('./graphql/schema/typeDefs')
const {resolvers} = require('./graphql/resolver/resolvers')
require('dotenv').config()
const {DB_URI} = process.env
const {VerifyUser} = require('./auth/verifyUser')
const userSchema = require('./Models/user')




const server = new ApolloServer({
     typeDefs, 
     resolvers, 
     context: async({req})  => {
      const authUser = await VerifyUser(req.headers.authorization, userSchema)
      return {
        authUser, 
        userSchema
      }
     }
    }) 

mongoose.connect(DB_URI, {useNewUrlParser: true})
.then(() => { 
  console.log("connected to dababase ") 
  return server.listen({port: process.env.PORT || 4000})
}) 
.then((res) => {
  console.log(`server is running on ${res.url}`)
})



