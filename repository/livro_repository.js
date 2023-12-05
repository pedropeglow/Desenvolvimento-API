const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'crud_biblioteca'
};

async function listar() {
    const cliente = new Client(conexao);
    await cliente.connect();

    const sql = "SELECT livros.id, livros.nome_livro, livros.autor, livros.ano_publicacao, livros.disponivel, livros.editora, autores.nome_autor FROM livros, autores where livros.autor = autores.id_autor ORDER BY livros.id";
    const result = await cliente.query(sql);
    await cliente.end();
    return result.rows;
}

function disponibilidade() {
    return true
}

async function inserir(livro) {
    const cliente = new Client(conexao);
    cliente.connect();
    livro.disponivel = disponibilidade();
    const sql = "INSERT INTO livros (nome_livro, autor, ano_publicacao, disponivel, editora) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [livro.nome, livro.autor[0].id_autor, livro.anoPublicacao, livro.disponivel, livro.editora];
    res = await cliente.query(sql,values);
    cliente.end();
}

async function buscarPorId(id){
    const cliente = new Client(conexao);
    await cliente.connect();

    const sql = `SELECT livros.nome_livro, livros.autor, livros.ano_publicacao, livros.disponivel, livros.editora, autores.nome_autor FROM livros, autores WHERE livros.id = ${id} AND livros.autor = autores.id_autor`;
    const result = await cliente.query(sql);
    await cliente.end();
    return result.rows;  
}


async function atualizar(id, livro) {
    const cliente = new Client(conexao);
    cliente.connect();
    livro.disponivel = disponibilidade();
    const sql = "UPDATE livros SET nome_livro = $1, autor = $2, ano_publicacao = $3, editora = $4 WHERE id = $5";
    const values = [livro.nome, livro.autor[0].id_autor, livro.anoPublicacao, livro.editora, id];
    res = await cliente.query(sql,values);
    cliente.end();
}

async function deletar(id) {
    const cliente = new Client(conexao);
    cliente.connect();
    const sql = "DELETE FROM livros WHERE id = $1";
    const values = [id];
    res = await cliente.query(sql,values);
    cliente.end();
}

async function pegarLivro(id){
    const cliente = new Client(conexao);
    cliente.connect();
    livro.disponivel = disponibilidade();

    const sql = "UPDATE livros SET disponivel = false WHERE id = $1";
    const values = [id];
    res = await cliente.query(sql,values);
    cliente.end();
}

async function devolverLivro(id){
    const cliente = new Client(conexao);
    cliente.connect();
    livro.disponivel = disponibilidade();

    const sql = "UPDATE livros SET disponivel = true WHERE id = $1";
    const values = [id];
    res = await cliente.query(sql,values);
    cliente.end();
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