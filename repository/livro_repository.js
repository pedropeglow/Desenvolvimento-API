let listaLivros = [];
let idGerador = 1;


function listar() {
    return listaLivros;
}

function geraId() {
    return idGerador++;
}

function disponibilidade() {
    return true
}

function inserir(livro) {
    livro.id = geraId();
    livro.disponivel = disponibilidade();
    listaLivros.push(livro);
}

function buscarPorId(id){
    return listaLivros.find(function(livro) {
        return(livro.id == id);        
    })   
}


function atualizar(id, livro) {
    for(let ind in listaLivros) {
        if(listaLivros[ind].id == id) {
            listaLivros[ind] = livro;
            listaLivros[ind].id = id;
            return;
        }
    }
}

function deletar(id) {
    for(let ind in listaLivros) {
        if(listaLivros[ind].id == id) {
            return listaLivros.splice(ind,1);
        }
    }
}

function pegarLivro(id){
   for(let ind in listaLivros) {
        if(listaLivros[ind].id == id){
            listaLivros[ind].disponivel = false;
        }
    }
}

function devolverLivro(id){
    for(let ind in listaLivros) {
        if(listaLivros[ind].id == id){
            listaLivros[ind].disponivel = true;
        }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pegarLivro,
    devolverLivro
}