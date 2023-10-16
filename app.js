const express = require('express')
const livroService = require('./service/livro_service')

const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Olá Bem-Vindo a Biblioteca!</h1>')
})

app.get('/livros', (req, res) => {
  const listaLivros = livroService.listar();
  res.status(200).json(listaLivros);
})

app.post('/livros', (req, res) => {
    let livro = req.body;
    try {
      livroService.inserir(livro);
      res.status(201).json({mensagem:'Livro inserido com sucesso!'})
    }
    catch(err) {
      res.status(err.id).json({mensagem: err.message});
    }
})

app.get('/livros/:id', (req, res) => {
    const id = +req.params.id;
    try {
      const livro = livroService.buscarPorId(id);
      res.json(livro);
    }
    catch(err) {
      res.status(err.id).json({mensagem: err.message});
    }
})

app.put('/livros/:id', (req, res) => {
  const id = req.params.id;
  let livro = req.body;
  try {
    livroService.atualizar(id, livro)
    res.status(200).json({mensagem: "Livro atualizado com sucesso!"})
  } catch (error) {
    res.status(error.id).json({mensagem: error.message})
  }
})

app.delete('/livros/:id', (req, res) => {
  const id = req.params.id;
  try {
    livroService.deletar(id);
    res.status(200).json({mensagem: "Livro deletado com sucesso!"})
  } catch (error) {
    res.status(error.id).json({mensagem: error.message})
  }
})

app.get('/pegarLivro/:id', (req, res) => {
  const id = req.params.id;
  try {
    const livro = livroService.buscarPorId(id);
    livroService.pegarLivro(id);
    res.status(200).json({mensagem: `Você pegou emprestado o livro ${livro.nome}`})
  } catch (error) {
    res.status(error.id).json({mensagem: error.message})
  }
})

app.get('/devolverLivro/:id', (req, res) => {
  const id = req.params.id;
  try {
    const livro = livroService.buscarPorId(id);
    livroService.devolverLivro(id);
    res.status(200).json({mensagem: `Você devolveu o livro ${livro.nome}`})
  } catch (error) {
    res.status(error.id).json({mensagem: error.message})
  }
})

app.listen(port, () => {
  console.log(`Library API listening on port ${port}`)
})