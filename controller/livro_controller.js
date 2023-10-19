const livroService = require("../service/livro_service");

function listar(req, res) {
  const listaLivros = livroService.listar();
  res.status(200).json(listaLivros);
}

function inserir(req, res) {
  let livro = req.body;
  try {
    livroService.inserir(livro);
    res.status(201).json({ mensagem: "Livro inserido com sucesso!" });
  } catch (err) {
    res.status(err.id).json({ mensagem: err.message });
  }
}

function buscarPorId(req, res) {
  const id = +req.params.id;
  try {
    const livro = livroService.buscarPorId(id);
    res.json(livro);
  } catch (err) {
    res.status(err.id).json({ mensagem: err.message });
  }
}

function atualizar(req, res) {
  const id = req.params.id;
  let livro = req.body;
  try {
    livroService.atualizar(id, livro);
    res.status(200).json({ mensagem: "Livro atualizado com sucesso!" });
  } catch (error) {
    res.status(error.id).json({ mensagem: error.message });
  }
}

function deletar(req, res) {
  const id = req.params.id;
  try {
    livroService.deletar(id);
    res.status(200).json({ mensagem: "Livro deletado com sucesso!" });
  } catch (error) {
    res.status(error.id).json({ mensagem: error.message });
  }
}

function pegarLivro(req, res) {
  const id = req.params.id;
  try {
    const livro = livroService.buscarPorId(id);
    livroService.pegarLivro(id);
    res
      .status(200)
      .json({ mensagem: `Você pegou emprestado o livro ${livro.nome}` });
  } catch (error) {
    res.status(error.id).json({ mensagem: error.message });
  }
}

function devolverLivro(req, res) {
  const id = req.params.id;
  try {
    const livro = livroService.buscarPorId(id);
    livroService.devolverLivro(id);
    res.status(200).json({ mensagem: `Você devolveu o livro ${livro.nome}` });
  } catch (error) {
    res.status(error.id).json({ mensagem: error.message });
  }
}

module.exports = {
  listar,
  inserir,
  buscarPorId,
  atualizar,
  deletar,
  pegarLivro,
  devolverLivro,
};
