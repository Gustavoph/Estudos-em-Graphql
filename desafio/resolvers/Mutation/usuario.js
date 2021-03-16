const db = require('../../config/db')
const { perfil: obterPerfil } = require('../Query/perfil');
const { usuarios: obterUsuario } = require('../Query/usuario');

module.exports = {
    async novoUsuario(_, { dados }) {
        try {
            console.log(dados)
            const idsPerfis = []
            if (dados.perfis) {
                for (let filtro of dados.perfis) {
                    const perfil = await obterPerfil(_, {
                        filtro
                    })
                    if (perfil) idsPerfis.push(perfil.id);
                }
            }

            delete dados.perfis

            const [id] = await db('usuarios')
                .insert(dados)

            for (perfil_id of idsPerfis) {
                await db('usuarios_perfis')
                    .insert({ perfil_id, usuarios_id: id })
            }

            const user = db('usuarios')
                .where({ id })
                .first()

            console.log(user)
            return user
        } catch (e) {
            console.log(e)
        }
    },
    async excluirUsuario(_, { filtro }) {
        try {
            const usuario = await obterUsuario(_, { filtro });
            if (usuario) {
                const { id } = usuario
                await db('usuarios_perfis')
                    .where({ usuario_id: id }).delete()
                await db('usuarios')
                    .where({ id }).delete()
            }
            return usuario
        } catch (e) {
            console.log(e)
        }
    },
    async alterarUsuario(_, { filtro, dados }) {
        try {
            const usuario = await obterUsuario(_, { filtro });
            if (usuario) {
                const { id } = usuario
                if (dados.perfis) {
                    await db('usuarios_perfis')
                        .where({ usuario_id: id })
                        .delete()
                    for (let filtro of dados.perfis) {
                        const perfil = await obterPerfil(_, {
                            filtro
                        })
                        await db('usuarios_perfis')
                            .insert({
                                perfil_id: perfil.id,
                                usuario_id: id
                            })
                    }
                }
                delete dados.perfis

                await db('usuarios')
                    .where({ id })
                    .update(dados)
                return { ...usuarios, ...dados }
            }
            return null

        } catch (e) {
            console.log(e)
        }
    }
}