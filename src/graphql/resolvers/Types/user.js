const { createUser, userSignIn } = require('../Mutations/user')




module.exports = {
    Mutation: {
        createUser,
        userSignIn
    }
}