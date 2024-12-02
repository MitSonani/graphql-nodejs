const prismaClient = require("../../lib/connectionDB")

const IsUserExist = async (email) => {

    const isUserExist = await prismaClient.user.findUnique({ where: { email: email } })

    if (isUserExist) {
        return isUserExist
    } else {
        return false
    }
}

module.exports = IsUserExist