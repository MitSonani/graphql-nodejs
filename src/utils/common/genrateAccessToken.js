const jwt = require('jsonwebtoken')

const genrateAccessTopken = async (user) => {
    const token = await jwt.sign({
        id: user.id,
        email: user.email,
        usernName: user.usernName
    }, process.env.JWT_SECRET, { expiresIn: process.env.expiresIn })

    return token

}

module.exports = genrateAccessTopken