const express = require("express");
const { createServer } = require("http");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const bodyParser = require("body-parser");
const typeDefs = require("../graphql/schemas");
const resolvers = require("../graphql/resolvers");
const context = require("../graphql/context");

const app = express();

const server = createServer(app);

app.use(cors());
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: false, limit: "500mb" }));
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true, parameterLimit: 50000 }));


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    introspection: true,

    playground: {
        settings: {
            "schema.polling.enable": false,
            "editor.fontSize": 18,
        },
    },
});

apolloServer.start().then((res) => {
    apolloServer.applyMiddleware({ app, path: "/graphql" });
    app.listen({ port: 4000 }, () => {
        console.log(`Gateway API running at port: 4000`);
    });
});

module.exports = server;
