const { perfis, cursos } = require('../../db');

module.exports = {
    perfil(usuario) {
        const index = perfis.findIndex(p => p.id === usuario.perfil_id);
            
        if (index > -1) {
            return perfis[index];
        } else {
            return null
        }
    },
    curso(usuario) {
        const index = cursos.findIndex(c => c.id === usuario.curso_id);

        if(index > -1){
            return cursos[index]
        } else {
            return null
        }
    }

}