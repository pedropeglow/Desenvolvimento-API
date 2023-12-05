const autorService = require("../service/autor_service");

async function deletar(req, res) {
  const id = req.params.id;
  try {
    await autorService.deletar(id);
    res.status(200).json({ mensagem: "Autor deletado com sucesso!" });
  } catch (error) {
    res.status(error.id).json({ mensagem: error.message });
  }
}

module.exports = {
  deletar,
};
