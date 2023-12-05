const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'crud_biblioteca'
};

async function buscarAutorPorId(id){
    const cliente = new Client(conexao);
    await cliente.connect();

    const sql = `SELECT id_autor, nome_autor FROM autores WHERE id_autor = ${id}`;
    const result = await cliente.query(sql);
    await cliente.end();
    return result.rows;
}

async function deletar(id) {
    try {
        const cliente = new Client(conexao);
        cliente.connect();

        const sql = "DELETE FROM autores WHERE id_autor = $1";
        const values = [id];
        res = await cliente.query(sql,values);
        cliente.end();
    } catch (error) {
        return error.code;
    }
    
}

module.exports = {
    buscarAutorPorId,
    deletar
}