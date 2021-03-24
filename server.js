const {ApolloServer} = require('apollo-server')
const resolvers = require('./resolvers')
const schema = require('./schema')

const server = new ApolloServer({typeDefs: schema, resolvers})

const port = 3030

server.listen(port).then(() => {
    console.log(`
    Servidor ouvindo na porta ${port}
    Link do servidor https://localhost:${port}/graphql
    Acesse https://localhost:${port}/graphql para acessar o playground
    `)
})