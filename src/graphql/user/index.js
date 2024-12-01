const mutation = require("./mutation");
const query = require("./query");
const resolver = require("./resolvers");
const typeDef = require("./typeDef");

const User = { typeDef, resolver, query, mutation }

module.exports = User