const alunos = [
    {
        id: '123',
        nomeCompleto: 'Gean Saturno',
        idade: 28
    },{
        id: '1234',
        nomeCompleto: 'Renata Melo',
        idade: 25
    },{
        id: '1235',
        nomeCompleto: 'Silvana Maria',
        idade: 52
    },{
        id: '1236',
        nomeCompleto: 'Josefa de Lurdes',
        idade: 81
    },
]

const resolvers = {
    Query: {
        alunoes: function() {
            return alunos
        },
        aluno: function(root, args) {
            const id = args.id;
            return alunos.filter(aluno => aluno.id === id)[0];
        }
    },
    Mutation: {
        deleteAluno: function(root, args) {
            const id = args.where.id
            const index = alunos.findIndex(aluno => aluno.id === id)

            if(index >= 0) {
                return alunos.splice(index, 1)[0]
            } else {
                return null
            }
        },
        createAluno: function(root, args) {
            const aluno = args.data
            aluno.id = Date.now()
            alunos.push(aluno)

            return aluno
        },
        updateAluno: function(root, args) {
            const id = args.where.id
            const data = args.data
            const index = alunos.findIndex(aluno => aluno.id === id)

            if(index >= 0 ) {
                const aluno = alunos[index]
                Object.assign(aluno, data)
                return aluno
            } else {
                return null
            }

        }
    }
}

module.exports = resolvers