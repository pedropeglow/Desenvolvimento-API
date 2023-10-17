const livroRepository = require("../repository/livro_repository");
const autorRepository = require("../repository/autor_repository");

function listar() {
  return livroRepository.listar();
}

function inserir(livro) {
  if (
    livro &&
    livro.nome &&
    livro.autor &&
    livro.editora &&
    livro.anoPublicacao
  ) {
    const autorEncontrado = autorRepository.buscarAutorPorId(livro.autor);
    if (autorEncontrado) {
      livro.autor = autorEncontrado;
      livroRepository.inserir(livro);
    } else {
      throw { id: 404, message: "Autor não encontrado!" };
    }
  } else {
    throw {
      id: 400,
      message:
        "Livro não possui nome, autor, editora ou o seu ano de publicação!",
    };
  }
}

function buscarPorId(id) {
  const livro = livroRepository.buscarPorId(id);
  if (livro) {
    return livro;
  } else {
    throw { id: 404, message: "Livro não encontrado" };
  }
}

function atualizar(id, livro) {
  const livroEncontrado = livroRepository.buscarPorId(id);
  if (livroEncontrado) {
    if (
      livro &&
      livro.nome &&
      livro.autor &&
      livro.editora &&
      livro.anoPublicacao
    ) {
      const autorEncontrado = autorRepository.buscarAutorPorId(livro.autor);
      if (autorEncontrado) {
        livro.autor = autorEncontrado;
        livro.disponivel = livroEncontrado.disponivel;
        livroRepository.atualizar(id, livro);
      } else {
        throw { id: 404, message: "Autor não encontrado!" };
      }
    } else {
      throw {
        id: 400,
        message:
          "Livro não possui nome, autor, editora ou o seu ano de publicação!",
      };
    }
  } else {
    throw { id: 404, message: "Livro não encontrado" };
  }
}

function deletar(id) {
  livro = livroRepository.buscarPorId(id);
  if (livro) {
    livroRepository.deletar(id);
  } else {
    throw { id: 404, message: "Livro não encontrado!" };
  }
}

function pegarLivro(id) {
  livro = livroRepository.buscarPorId(id);
  if (livro) {
    if (livro.disponivel == true) {
      livroRepository.pegarLivro(id);
    } else {
      throw { id: 400, message: "Livro não está disponível no momento!" };
    }
  } else {
    throw { id: 404, message: "Livro não encontrado!" };
  }
}

function devolverLivro(id) {
  livro = livroRepository.buscarPorId(id);
  if (livro) {
    if (livro.disponivel == false) {
      livroRepository.devolverLivro(id);
    } else {
      throw {
        id: 400,
        message:
          "O livro que você está tentando devolver já consta na nossa base de dados!",
      };
    }
  } else {
    throw { id: 404, message: "Livro não encontrado!" };
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
