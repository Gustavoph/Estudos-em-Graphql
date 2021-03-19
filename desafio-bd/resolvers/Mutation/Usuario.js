const { db } = require('../../db/index');

function filtraUsuario(filtro){
    if(!filtro) return -1
    
    const { id, email } = filtro
    if(id) {
        const userId = db.findIndex( user => user.id === id);
        return userId
    } else if( email ) {
        const userId = db.filter( user => user.email === email);
        return userId
    } else{
        return -1
    }
}


module.exports = {
     createUser(_, { dados }){  
        const user = { 
            id: dados.id,
            nome: dados.nome, 
            email: dados.email,
            idade: dados.idade,
            perfil_id: dados.perfil_id,
            curso_id: dados.curso_id,
        }
        db.push(user)
         
        return user
     },
     deleteUser(_, { filtro }) {
        
        const userId = filtraUsuario(filtro);

        if(userId !== -1){
            const user = db[userId];
            db.splice(userId, 1);
            return user
        } else {
            return false
        }
     },
     updateUser(_, {filtro, dados}){
        
        const userId = filtraUsuario(filtro)

        if(userId !== -1){
            db[userId].nome = dados.nome
            db[userId].nome = dados.nome
            db[userId].nome = dados.nome
            db[userId].nome = dados.nome
            db[userId].nome = dados.nome

            return dados
        }else{
            return null
        }
     }
}