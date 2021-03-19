const { perfis } = require('../../db');

module.exports = {
    perfis(){
        return perfis;
    },
    perfil(_, { id }){
        const index = perfis.findIndex(p => p.id === id);

        if(index > -1){
            return perfis[index];
        } else {
            return null
        }
    }
}