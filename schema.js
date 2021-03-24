const {gql} = require('apollo-server')

const schema = gql`
type Aluno {
    id: ID!
    nomeCompleto: String!
    idade: Int
}

input AlunoInput {
    nomeCompleto: String!
    idade: Int
}

input AlunoUpdate {
    nomeCompleto: String
    idade: Int
}

input AlunoWhere {
    id: ID!
}

type Query {
    alunoes: [Aluno]!
    aluno(id: ID!): Aluno
}

type Mutation {
    deleteAluno(where: AlunoWhere!):Aluno
    createAluno(data: AlunoInput): Aluno
    updateAluno(data: AlunoUpdate where: AlunoWhere!):Aluno
}
`

module.exports = schema