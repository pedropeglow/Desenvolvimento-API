const livroService = require("../service/livro_service");

async function listar(req, res) {
  const listaLivros = await livroService.listar();
  res.status(200).json(listaLivros);
}

async function inserir(req, res) {
  let livro = req.body;
  try {
    await livroService.inserir(livro);
    res.status(201).json({ mensagem: "Livro inserido com sucesso!" });
  } catch (err) {
    res.status(err.id).json({ mensagem: err.message });
  }
}

async function buscarPorId(req, res) {
  const id = +req.params.id;
  try {
    const livro = await livroService.buscarPorId(id);
    res.json(livro);
  } catch (err) {
    res.status(err.id).json({ mensagem: err.message });
  }
}

async function atualizar(req, res) {
  const id = req.params.id;
  let livro = req.body;
  try {
    await livroService.atualizar(id, livro);
    res.status(200).json({ mensagem: "Livro atualizado com sucesso!" });
  } catch (error) {
    res.status(error.id).json({ mensagem: error.message });
  }
}

async function deletar(req, res) {
  const id = req.params.id;
  try {
    await livroService.deletar(id);
    res.status(200).json({ mensagem: "Livro deletado com sucesso!" });
  } catch (error) {
    res.status(error.id).json({ mensagem: error.message });
  }
}

async function pegarLivro(req, res) {
  const id = req.params.id;
  try {
    const livro = await livroService.buscarPorId(id);
    await livroService.pegarLivro(id);
    res
      .status(200)
      .json({ mensagem: `Você pegou emprestado o livro ${livro[0].nome_livro}` });
  } catch (error) {
    res.status(error.id).json({ mensagem: error.message });
  }
}
async function devolverLivro(req, res) {
  const id = req.params.id;
  try {
    const livro = await livroService.buscarPorId(id);
    await livroService.devolverLivro(id);
    res.status(200).json({ mensagem: `Você devolveu o livro ${livro[0].nome_livro}` });
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
