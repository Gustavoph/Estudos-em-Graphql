module.exports = {
  client: 'mysql',
  connection: {
    database: 'desafio',
    user:     'root',
    password: '@rv0re24Xcv'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
