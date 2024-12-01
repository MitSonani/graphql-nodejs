const prismaClient = require("../../lib/connectionDB")

const IsUserExist = async (email) => {

    const isUserExist = await prismaClient.user.findUnique({ where: { email: email } })

    if (isUserExist) {
        return true
    } else {
        return false
    }
}

module.exports = IsUserExist