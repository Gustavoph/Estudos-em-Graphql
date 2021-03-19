const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const port = 4000;

const schemaPath = './schema/index.gql'
const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen(port).then(({ url }) =>{
    console.log(`🔥 Server started at ${url}`)
});