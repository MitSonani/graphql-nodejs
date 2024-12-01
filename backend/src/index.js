const express = require('express')
const app = express()
const dotenv = require('dotenv')
const createApolloServer = require('./graphql')
const { expressMiddleware } = require('@apollo/server/express4')
dotenv.config()


async function server() {

    app.use(express.json())

    app.use('/graphql', expressMiddleware(await createApolloServer()))

    app.listen(process.env.PORT, () => {
        console.log(`Server is started on ${process.env.PORT}`)
    })
}

module.exports = { server }