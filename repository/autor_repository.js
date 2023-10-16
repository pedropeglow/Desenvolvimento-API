let listaAutores = [
    {   
        id: 1,
        nome: "Carlos"
    },
    {
        id: 2,
        nome: "José"
    }
];

function buscarAutorPorId(id){
    return listaAutores.find(function(livro) {
        return(livro.id == id);        
    })   
}

function listarAutores() {
    return listaAutores;
}

module.exports = {
    buscarAutorPorId,
    listarAutores
}