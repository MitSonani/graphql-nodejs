const userApi = require('../../services/user/index')
const query = {}

const mutation = {
    createUser: async (_, input) => {
        const response = await userApi.Signup.Handler(input)
        return {
            message: "User Registered Successfully",
            success: true,
            user: {
                id: response?.id,
                firstName: response.firstName,
                lastName: response.lastName,
                email: response.email,
                gender: response.gender,
                profileImage: response.profileImage,
                userName: response.userName
            },
            statusCode: 200
        };
    },

    userSignIn: async (_, input) => {
        const response = await userApi.SignIn.Handler(input)
        return {
            message: "User LoggedIn",
            success: true,
            user: {
                id: response?.id,
                firstName: response.firstName,
                lastName: response.lastName,
                email: response.email,
                gender: response.gender,
                profileImage: response.profileImage,
                userName: response.userName,
                token: response.token
            },
            statusCode: 200
        };
    }
}


const resolver = { query, mutation }

module.exports = resolver