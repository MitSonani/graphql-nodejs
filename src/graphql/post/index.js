const typeDef = require('./typeDef')
const resolver = require('./resolvers')
const mutation = require('./mutation')
const query = require('./query')


const Post = { typeDef, resolver, mutation, query }

module.exports = Post