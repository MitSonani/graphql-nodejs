const { ApolloServer } = require("@apollo/server");
const User = require("./user");

const createApolloServer = async () => {
    const apolloServer = new ApolloServer({
        typeDefs: `
            ${User.typeDef}

            type Query{
             helloString:String!
            }
             
            type Mutation{
            ${User.mutation}
            }
            `
        ,
        resolvers: {
            Query: {
                helloString: () => "Hello, world!",
            },
            Mutation: {
                ...User.resolver.mutation
            }
        }
    })

    await apolloServer.start()

    return apolloServer
}


module.exports = createApolloServer