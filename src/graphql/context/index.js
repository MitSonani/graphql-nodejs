const { AuthenticationError } = require("apollo-server-express");
const prismaClient = require("../../lib/connectionDB");


const verifyToken = async (token) => {

    try {
        if (!token) return null

        const { id } = await jwt.verify(token, process.env.JWT_SECRET);
        const user = await prismaClient.user.findUnique({ where: { id } })

        if (!user) throw new AuthenticationError('Invalid token')

        return user

    } catch (error) {
        throw new AuthenticationError(error.message);
    }
}

module.exports = async ({ req }) => {
    if (req.headers.authorization !== undefined || null) {
        const token = req.headers.authorization.split(" ")[1];
        const user = await verifyToken(token);
        return { user };
    } else {
        const token = req.headers.token;
        const user = await verifyToken(token);
        return { user: JSON.parse(JSON.stringify(user)) };
    }
};
