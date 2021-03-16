const db = require('../../config/db')

module.exports = {
    async perfis() {
        const perfis = await db.select('*')
            .from('perfis')
        return perfis;
    },
    async perfil(_, { filtro }) {
        if(!filtro) return null
        const { id, nome } = filtro;

        if (id) {
            return await db('perfis')
                .where({ id })
                .first()

        } else if (nome) {
            return await db.select('*')
                .from('perfis')
                .where({ nome })
                .first()
        } else {
            return null
        }
    }
}