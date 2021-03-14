module.exports = {
  client: 'mysql',
  connection: {
    database: 'exercicios',
    user: 'root',
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
