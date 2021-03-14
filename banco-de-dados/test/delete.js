const database = require('../config/db');

database('usuarios')
    .where({ id: 2})
    .delete()
    .then(res => console.log(res))
    .catch(err => console.error(err.sqlMessage))
    .finally( () => database.destroy())