const db = [
    { id: 1, nome: 'Gustavo', email: 'gusta@gmail.com', idade: 18, perfil_id: 1, curso_id: 2 },
    { id: 2, nome: 'Giovanna', email: 'gi@gmail.com', idade: 18, perfil_id: 2, curso_id: 1 },
    { id: 3, nome: 'Maryanna', email: 'mary@gmail.com', idade: 11, perfil_id: 3, curso_id: 3 },
    { id: 4, nome: 'Maryanna', email: 'mary@gmail.com', idade: 11, perfil_id: 3, curso_id: 3 },
]

const perfis = [
    { id: 1, nome: 'Admin', rotulo: 'Administrador'},
    { id: 2, nome: 'Comum', rotulo: 'Comum'},
    { id: 3, nome: 'Visitante', rotulo: 'Visitante'},
]

const cursos = [
    { id: 1, nome: 'Arquitetura', horas: '50000' },
    { id: 2, nome: 'Engenharia de Software', horas: '40000' },
    { id: 3, nome: 'Administração', horas: '35000' },
]
module.exports = {
    db,
    perfis,
    cursos
}