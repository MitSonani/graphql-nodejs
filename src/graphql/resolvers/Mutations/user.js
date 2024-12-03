const userApi = require('../../../services/user')

module.exports = {
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