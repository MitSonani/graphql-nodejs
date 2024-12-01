const ApiError = require("../../utils/ApiError");
const asyncHandler = require("../../utils/asyncHandler");
const IsUserExist = require("../../utils/common/findUserIsExist");
const genrateAccessTopken = require("../../utils/common/genrateAccessToken");
const { genrateHasedPassword } = require("../../utils/common/genrateHashedPassword");

module.exports = {
    Handler:
        asyncHandler(async (payload) => {

            const { email, password } = payload;

            if (!email || !password) {
                throw new ApiError(400, "All Fields are required")
            }
            const isExist = await IsUserExist(email)

            if (!isExist) {
                throw new ApiError(404, "User not found , Please do register ")
            }

            const hashedPassword = await genrateHasedPassword(isExist.salt, password)

            if (hashedPassword !== isExist.password) {
                throw new ApiError(400, "Invalid email or password")
            }

            const token = await genrateAccessTopken(isExist)

            isExist.token = token

            return isExist

        })


}