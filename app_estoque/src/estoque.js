let produtos = [];

function criarProduto(id, nome, qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function adicionarProduto(p){
    produtos.push(p);
}

function removerProduto(id){
    produtos = produtos.filter((p => {
        let x = p.id != id
        return x;
    }))
}


function listarProdutos(){
    return produtos;
}


module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto
};