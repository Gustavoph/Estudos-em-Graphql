const { usuarios, perfis } = require('../data/db');

module.exports = {
    ola() {
        return 'Deu bom'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Gustavo Oliveira',
            email: 'gusta@gmail.com',
            idade: 18,
            salario_real: 1386.00,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Notebook Gamer',
            preco: 4890.89,
            desconco: 0.15,
        }
    },
    numerosMegaSena(){
        // return [ 1, 4, 6, 7, 32]
        const crescente = (a, b) => a - b
        return Array(6).fill(0)
        .map(n => parseInt(Math.random() * 60 + 1))
        .sort(crescente)
    },
    usuarios(){
        return usuarios
    },
    usuario(_, { id }){
        const selecionados = usuarios.filter(u => u.id == id);
        return selecionados ? selecionados[0] : null
    },
    perfil(_, { id }){
        const perfil = perfis.filter(p => p.id == id);
        return perfil ? perfil[0] : null;
    },
    perfis(){
        return perfis;
    }
}