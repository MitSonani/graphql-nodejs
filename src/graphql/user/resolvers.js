const { Signup } = require("../../services/user")
const ApiResponse = require('../../utils/ApiResponse')

const query = {}

const mutation = {
    createUser: async (_, input) => {
        const response = await Signup.handler(input)
        return {
            id: response?.id,
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
    }
}


const resolver = { query, mutation }

module.exports = resolver