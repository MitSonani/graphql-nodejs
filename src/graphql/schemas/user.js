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


  type Mutation {
    createUser(
      firstName: String!
      lastName: String
      email: String!
      password: String!
      userName: String!
      gender:String
      profileImage:String
    ): CreateUserResponse
  }

  type Mutation{
    userSignIn(
      email: String!
      password: String!
    ):CreateUserResponse
  }
`