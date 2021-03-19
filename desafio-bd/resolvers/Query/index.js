const usuario = require('./usuarios')
const perfis = require('./perfis');

module.exports = {
    ...usuario,
    ...perfis,
    ola(){
        return 'Olá'
    }
}