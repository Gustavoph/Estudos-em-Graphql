module.exports = {
    precoComDesconto(produto){
        if(produto.desconco){
            return produto.preco * (1 - produto.desconco)
        }else{
            return produto.preco
        }
    }
}