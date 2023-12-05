const request = require('supertest');
const App = require("../app")



describe('Deletar autor', () => {
    it('Deve retornar um erro ao excluir autor inexistente', async () => {
        const result = await request(App.app).delete('/autores/1231');
        expect(result.status).toEqual(404);
        expect(result.body).toHaveProperty('mensagem', 'Autor não encontrado!');
    })
})

describe('Deletar autor', () => {
    it('Deve retornar mensagem de erro ao tentar excluir um autor que está vinculado a um livro', async () => {
        const result = await request(App.app).delete('/autores/1');
        expect(result.status).toEqual(400);
        expect(result.body).toHaveProperty('mensagem', 'Este Autor já esta vinculado a um livro, não é possível excluí-lo');
    })
})