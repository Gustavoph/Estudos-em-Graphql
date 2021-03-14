const database = require('../config/db');

const novoUsuario = {
    nome: 'Gustavo',
    email: 'gusta@gmail.com',
    senha: '123456'
}

async function exercicio() {
    const { qtde } = await database('usuarios')
        .count('* as qtde').first()

    if(qtde === 0){
        await database('usuarios').insert(novoUsuario)
    }
    const id = 1;
    await database('usuarios')
        .where({ id: id})
        .update({nome : 'Gustavo Oliveira'})
}

exercicio()
    .then(usuario => console.log(usuario))
    .catch(err => console.error(err.sqlMessage))
    .finally( () => database.destroy())