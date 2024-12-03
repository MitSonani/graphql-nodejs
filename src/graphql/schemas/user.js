const { gql } = require("apollo-server-express");

module.exports = gql`


type CreateUserResponse {
    id: ID
    message: String!
    success: Boolean!
    user: User
    statusCode:Int!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    gender: String
    profileImage: String
    userName: String!
    token:String
  }
`