const prismaClient = require("../lib/connectionDB")
const ApiError = require("../utils/ApiError")
const jwt = require('jsonwebtoken')

const authContext = async ({ req }) => {
    try {
        const token = req.headers['Authorization']

        if (!token) {
            throw new ApiError(404, "Please send token")
        }

        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)

        if (!decodeToken) {
            throw new ApiError(404, "Please send valid token")
        }

        const user = await prismaClient.user.findUnique({ where: { id: decodeToken.id } })

        if (!user) {
            throw new ApiError(404, "user does not exist ")
        }

        return { user }
    } catch (error) {
        throw new Error(error)
    }

}


module.exports = authContext