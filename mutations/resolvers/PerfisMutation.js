const { perfis } = require('../data/db');

module.exports = {
    novoPerfil(_, { id, nome }){
        const perfil = {
            id: id,
            nome: nome
        }

        perfis.push(perfil);
        return perfil
    }
}