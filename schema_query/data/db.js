const usuarios =[
    {id: 1, nome: 'Gustavo Oliveira', email: 'gusta@gmail.com', idade: 18, nota: 10, perfil_id: 2, status: 'ATIVO'},
    {id: 2, nome: 'Giovanna Alcini', email: 'giovanna@gmail.com', idade: 18, nota: 10, perfil_id: 1, status: 'INATIVO'},
    {id: 3, nome: 'Gilmar Oliveira', email: 'gilmar@gmail.com', idade: 36, nota: 10, perfil_id: 2, status: 'BLOQUEADO'}
]

const perfis = [
    {id: 1, nome: 'Comum'},
    {id: 2, nome: 'Administrador'},
]

module.exports = { usuarios, perfis }