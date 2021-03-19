const { db, perfis } = require('../../db');

module.exports = {
    usuarios(){
        return db
    },
    usuario(_, { id }){  
        const user = db.filter(user => user.id === id);

        return user[0] || null
    },
}