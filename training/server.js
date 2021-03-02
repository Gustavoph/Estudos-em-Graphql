const { ApolloServer, gql } = require('apollo-server');
//const { users, faculdade } = require('./database/database.json')
const { importSchema } = require('graphql-import');
const Mutation = require('../mutations/resolvers/Mutation');
//const resolvers = require('./resolvers');
const schemaPath = './schema/index.graphql';
const port = 8080;

const users = [
    { "id": 1, "name": "Gustavo Oliveira", "email": "gusta@gmail.com", "idade": 18},
    { "id": 2, "name": "Giovanna Alcini", "email": "giovanna@gmail.com", "idade": 18},
    { "id": 3, "name": "Gilmar Oliveira", "email": "gilmar@gmail.com", "idade": 36},
    { "id": 4, "name": "Wannesa Campos", "email": "wanessa@gmail.com", "idade": 36},
    { "id": 5, "name": "Maryanna Campos", "email": "mary@gmail.com", "idade": 12}
]

const typeDefs = gql`
    type Usuarios {
        id: Int,
        name: String!,
        email: String!,
        idade: Int
    }

    type Query {
        usuarios: [Usuarios]
        usuario(id: Int): Usuarios
    }

    type Mutation {
        criaUsuario(
            dados: InputUsuarios
        ): Usuarios
    }

    input InputUsuarios {
        id: Int
        name: String,
        email: String,
        idade: Int
    }

`

const resolvers = {
    Query:{
        usuarios(){
            return users;
        },
        usuario(_, { id }){
            const user = users.find(user => user.id === id);
            return user
        }
    },

    Mutation:{
        criaUsuario(_, { dados }){
            const usuario = {
                id: dados.id,
                name: dados.name,
                email: dados.email,
                idade: dados.idade
            };
            users.push(usuario);
            return usuario;
        }
    }
    
}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(port).then(({ url }) =>{
    console.log({server : `${url}`})
})