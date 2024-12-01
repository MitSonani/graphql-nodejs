const mutation = `
  createUser(
    firstName: String!
    lastName: String
    email: String!
    gender: String
    profileImage: String
    userName: String!
    password: String!
  ): CreateUserResponse
`;

module.exports = mutation;
