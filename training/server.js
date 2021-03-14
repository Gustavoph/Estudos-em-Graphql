const { ApolloServer, gql} = require('apollo-server');
const { importSchema } = require('graphql-import');
const schemaPath = './schema/index.graphql';
const resolvers = require('./resolvers');
const port = 8080;

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen(port).then(({ url })=>{
    console.log({ server : `${ url }`});
})
