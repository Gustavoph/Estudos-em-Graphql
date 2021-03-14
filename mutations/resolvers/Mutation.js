const { usuarios, proximoId } = require('../data/db');

function indiceUsuario(filtro) {
    if (filtro) return -1
    const { id, email } = filtro
    if (id) {
        return usuarios.findIndex(u => u.id === id);
    } else if (email) {
        return usuarios.findIndex(u => u.email === email);
    }
    return -1
}

module.exports = {
    novoUsuario(_, { nome, email, idade }) {
        const emailExistente = usuarios
            .some(u => u.email === email)
        // Some basicamente faz uma comparação retornando true ou false


        if (emailExistente) throw new Error('E-mail Cadastrado');
        const novo = {
            id: proximoId(),
            nome: nome,
            email: email,
            idade: idade,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
    },

    excluirUsuario(_, { filtro }) {
        const indice = indiceUsuario(filtro);

        if (indice < 0) return null

        const excluidos = usuarios.splice(indice, 1)
        return excluidos ? excluidos[0] : null
    },

    alterarUsuario(_, { filtro, dados }) {
        const idUser = indiceUsuario(filtro);

        if (idUser < 0) return null

        // const user = {
        //     // Caso ocorra a repetição de chaves a ultima prevalece
        //     ...usuarios[idUser],
        //     ...dados
        // }

        usuarios[idUser].nome = dados.nome
        usuarios[idUser].email = dados.email
        usuarios[idUser].idade = dados.idade

        // usuarios.splice(idUser, 1, usuarios)
        console.log(idUser)
        return usuarios[idUser]
    }
}