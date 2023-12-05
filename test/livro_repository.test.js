const repository = require('../repository/livro_repository');
const controller = require('../controller/livro_controller');

const listaDeLivrosEsperada  = [
    {id: 4, nome_livro:"O Príncipe", autor: 1, ano_publicacao: "2017-07-14T03:00:00.000Z", disponivel: true, editora:"Editora 34", nome_autor: "Niccolò Machiavelli"},
    {id: 7, nome_livro:"O Mundo de Sofia", autor: 4,  ano_publicacao: "2012-11-19T02:00:00.000Z", disponivel: true, editora:"Companhia das Letras", nome_autor: "Jostein Gaarder"},
];

// Listar todos os livros e bater com a lista esperada.
test("Lista de Livros retorna a lista inicial esperada",
async  () => {
        resultados = await repository.listar()
       
        resultados.map(resultado => {
            resultado.ano_publicacao = resultado.ano_publicacao.toISOString()
        })
        expect(resultados).toEqual(listaDeLivrosEsperada)
        expect(resultados.length).toBe(2);
    }
)

// Buscar livro pelo ID específico
test("Buscar Por Id 4 deve retornar O Príncipe", async () => {
    let livro4 = [{
        nome_livro:"O Príncipe", 
        autor:1, 
        ano_publicacao:"2017-07-14T03:00:00.000Z",
        disponivel: true,
        editora: "Editora 34",
        nome_autor: "Niccolò Machiavelli"
    }];
    resultados = await repository.buscarPorId(4)
    resultados.map(resultado => {
        resultado.ano_publicacao = resultado.ano_publicacao.toISOString()
    })
    expect(resultados).toEqual(livro4);
}
)


//Buscar por um ID não existente deve retornar undefined
test("Buscar Por Id 5 deve retornar Undefined", async () => {
    resultado = await repository.buscarPorId(5)
    expect(await repository.buscarPorId(5)).toEqual(expect.arrayContaining([]));
})

test("Inserir um livro", async () => {
    resultado = await repository.listar()
    await repository.inserir({
        "nome": "O Livro de Teste",
        "autor": [{
            "id_autor": 1
        }],
        "editora": "Editora Teste",
        "anoPublicacao": "20/11/2020"
    })
    expect(await repository.listar()).toHaveLength(resultado.length + 1)
})


test("Atualizar o livro cujo ID é 7", async () => {
livro = {
    "nome": "O Mundo de Sofia",
    "autor": [{
        "id_autor": 4
    }],
    "editora": "Alterando EDITORA",
    "anoPublicacao": "2012-11-19T02:00:00.000Z"
}
await repository.atualizar(7, livro)
resultados = await repository.buscarPorId(7)
resultados.map(resultado => {
    resultado.ano_publicacao = resultado.ano_publicacao.toISOString()
})
expect(resultados).toEqual(resultados)
})


test("Deletar o livro que foi inserido, e após isso buscá-lo seu ID, deve retornar undefined.", async () => {
    resultados = await repository.listar()
    ultimoRegistro = resultados.pop()
    await repository.deletar(ultimoRegistro.id)
    expect(await repository.buscarPorId(ultimoRegistro.id)).toEqual(expect.arrayContaining([]))
})








