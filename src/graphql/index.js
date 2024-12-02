const { ApolloServer } = require("@apollo/server");
const User = require('./user');
const Post = require('./post')

const createApolloServer = async () => {
    const apolloServer = new ApolloServer({
        typeDefs: `
            ${User.typeDef}

            type Query{
             helloString:String!
            }
             
            type Mutation{
            ${User.mutation}
            ${Post.mutation}
            }
            `
        ,
        resolvers: {
            Query: {
                helloString: () => "Hello, world!",
            },
            Mutation: {
                ...User.resolver.mutation,
                ...Post.resolver.mutation
            }
        }
    })

    await apolloServer.start()

    return apolloServer
}


module.exports = createApolloServer