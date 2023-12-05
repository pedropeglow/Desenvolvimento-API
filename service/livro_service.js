const livroRepository = require("../repository/livro_repository");
const autorRepository = require("../repository/autor_repository");

async function listar() {
  return await livroRepository.listar();
}

async function inserir(livro) {
  if (
    livro &&
    livro.nome &&
    livro.autor &&
    livro.editora &&
    livro.anoPublicacao
  ) {
    const autorEncontrado = await autorRepository.buscarAutorPorId(livro.autor);
    if (autorEncontrado && autorEncontrado.length > 0) {
      livro.autor = autorEncontrado;
      await livroRepository.inserir(livro);
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

async function buscarPorId(id) {
  const livro = await livroRepository.buscarPorId(id);
  if (livro && livro.length > 0) {
    return livro;
  } else {
    throw { id: 404, message: "Livro não encontrado" };
  }
}

async function atualizar(id, livro) {
  const livroEncontrado = await livroRepository.buscarPorId(id);
  if (livroEncontrado && livroEncontrado.length > 0) {
    if (
      livro &&
      livro.nome &&
      livro.autor &&
      livro.editora &&
      livro.anoPublicacao
    ) {
      const autorEncontrado = await autorRepository.buscarAutorPorId(livro.autor);
      if (autorEncontrado && autorEncontrado.length > 0) {
        livro.autor = autorEncontrado;
        livro.disponivel = livroEncontrado.disponivel;
        await livroRepository.atualizar(id, livro);
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

async function deletar(id) {
  livro = await livroRepository.buscarPorId(id);
  if (livro && livro.length > 0) {
    await livroRepository.deletar(id);
  } else {
    throw { id: 404, message: "Livro não encontrado!" };
  }
}

async function pegarLivro(id) {
  livro = await livroRepository.buscarPorId(id);
  if (livro && livro.length > 0) {
    if (livro[0].disponivel == true) {
      await livroRepository.pegarLivro(id);
    } else {
      throw { id: 400, message: "Livro não está disponível no momento!" };
    }
  } else {
    throw { id: 404, message: "Livro não encontrado!" };
  }
}

async function devolverLivro(id) {
  livro = await livroRepository.buscarPorId(id);
  if (livro && livro.length > 0) {
    if (livro[0].disponivel == false) {
      await livroRepository.devolverLivro(id);
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
