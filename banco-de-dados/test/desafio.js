const database = require('../config/db');

async function saveUser(nome, email, senha) {
    //const { nome, email, senha } = people;
    const people = { nome, email, senha }
    //Verificando se o usuario existe
    const user = await database.select('*')
        .from('usuarios')
        .where({ email: email })
    

    if(user.length < 1){
        const newUser = await database
            .insert(people)
            .into('usuarios');
        people = newUser;

    }else{
        await database('usuarios')
        .where({email: email})
        .update({nome, email, senha})
    }

    return people;
}


async function savePerfil(nome, rotulo) {
    //Verificando se o perfil existe
    const perfis = { nome, rotulo }
    const perfil = await database.select('*')
        .from('perfis')
        .where({nome: nome});
    
    if(perfil.length < 1){
        perfis = await database.insert(perfis)
            .into('perfis')
    }
    return perfis;
}

// async function user_perfil(usuario, ...perfis) {
//     const usuario_id = usuario.email;
//     await database('usuarios_perfis')
//         .where({})
// }

async function query() {
    const usuario = await saveUser('Giovanna Alcini', 'giovanna@gmail.com', '123456')
    const perfil1 = await savePerfil('rh', 'Pessoal');
    const perfil2= await savePerfil('fin', 'Financeiro');
    
    console.log(usuario);
    console.log(perfil1);
    console.log(perfil2);
}

query()
    .then(res => console.log(res))
    .catch(err => console.error(err.sqlMessage))
    .finally( () => database.destroy());