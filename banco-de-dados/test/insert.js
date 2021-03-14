const database = require('../config/db');

// const novoPerfil = {
//     nome: 'visitante',
//     rotulo: 'Visitante'
// }

// database('perfis').insert(novoPerfil)
//     .then(res => console.log(res))
//     .catch(err => console.error(err.sqlMessage))
//     .finally( () => database.destroy())

const perfilSU = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuário'
}

database.insert(perfilSU).into('perfis')
    .then(res => console.log(res))
    .catch(err => console.error(err.sqlMessage))
    .finally( () => database.destroy())
    