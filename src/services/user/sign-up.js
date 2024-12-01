const prismaClient = require('../../lib/connectionDB')
const asyncHandler = require('../../utils/asyncHandler')
const { genrateSalt, genrateHasedPassword } = require('../common/genrateHashedPassword')
const ApiError = require('../../utils/ApiError')
const ApiResponse = require('../../utils/ApiResponse')

module.exports = {
    handler: asyncHandler(async (payload) => {
        const { firstName, email, gender, userName, lastName, password, profileImage } = payload;

        if (!firstName || !email || !gender || !userName || !password) {
            throw new ApiError(404, "All Fields are required")
        }

        const isUserExist = await prismaClient.user.findUnique({ where: { email: email } })

        if (isUserExist) {
            throw new ApiError(400, "User Alredy Exist")
        }

        const salt = await genrateSalt();
        const hashedPassowrd = await genrateHasedPassword(salt, password)

        const response = await prismaClient.user.create({
            data: {
                firstName,
                email,
                gender,
                userName,
                lastName,
                password: hashedPassowrd,
                profileImage,
                salt
            }, select: {
                id: true,
                firstName: true,
                userName: true,
                email: true,
                gender: true,
                profileImage: true
            }
        })


        return response;
    })
}