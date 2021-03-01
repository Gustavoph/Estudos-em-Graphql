const { ApolloServer, gql} = require('apollo-server');
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')
const port = 4000;

const schemaPath = './schema/index.graphql';
const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
});

server.listen(port).then(({ url }) => {
    console.log({server: url})
})