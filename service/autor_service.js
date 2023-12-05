const autorRepository = require("../repository/autor_repository");

async function deletar(id) {
  autor = await autorRepository.buscarAutorPorId(id);
  if (autor && autor.length > 0) {
    result = await autorRepository.deletar(id);
    if (result == 23503){
      throw {id: 400, message: "Este Autor já esta vinculado a um livro, não é possível excluí-lo"}
    }
  } else {
    throw { id: 404, message: "Autor não encontrado!" };
  }
}

module.exports = {
  deletar,
};
