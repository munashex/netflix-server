const {gql} = require('apollo-server') 

const typeDefs = gql` 

type Query {
    username(id: ID!): User!
}
  
 type User {
    id: ID! 
    name: String! 
    email: String! 
    password: String!
 } 

 type Mutation {
    signUp(input: SignUpInput!): AuthUser!
    signIn(input: SignInInput!): AuthUser!
 }

 input SignInInput {
   email: String!, 
   password: String!
 }

 input SignUpInput {
    name: String, 
    email: String! 
    password: String!
 }

 type AuthUser {
    user: User! 
    token: String!
 }

`;

module.exports = {typeDefs}