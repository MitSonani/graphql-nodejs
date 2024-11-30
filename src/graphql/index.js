const { ApolloServer } = require("@apollo/server");

const createApolloServer = async () => {
    const apolloServer = new ApolloServer({
        typeDefs:
            `type Query{
            helloString:String
            }
            type Mutation{
            helloString:String
            }
            `

        ,
        resolvers: {
            Query: {
                helloString: async () => "hello"
            },
            Mutation: {
                helloString: async () => "hello"
            }
        }
    })

    await apolloServer.start()

    return apolloServer
}


module.exports = createApolloServer