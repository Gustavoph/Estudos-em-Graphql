const database = require('../config/db');

// database('perfis')
//     .then(res => console.log(res))
//     .catch(err => console.error(err.sqlMessage))
//     .finally( () => database.destroy());


// database('perfis')
//     .then(res => res.map(r => r.nome))
//     .then(nomes => console.log(nomes))
//     .catch(err => console.error(err.sqlMessage))
//     .finally( () => database.destroy());

// database('perfis').select('id', 'nome')
//     .then(res => console.log(res))
//     .finally( () => database.destroy())

database.select('id', 'nome')
    .from('perfis')
    .limit(2)
    .where('id', 1)
    .then(res => console.log(res))
    .finally( () => database.destroy())