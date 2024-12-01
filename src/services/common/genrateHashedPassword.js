const { createHmac, randomBytes } = require('node:crypto');

const genrateSalt = async () => {
    const salt = await randomBytes(10).toString('hex')
    return salt
}

const genrateHasedPassword = async (salt, password) => {
    const hashedPassowrd = await createHmac('sha256', salt).update(password).digest('hex')
    return hashedPassowrd
}

module.exports = { genrateSalt, genrateHasedPassword }