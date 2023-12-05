const express = require("express");
const router = express.Router();
const livroController = require("../controller/livro_controller");

router.get("/", livroController.listar);
router.post("/", livroController.inserir);
router.get("/:id", livroController.buscarPorId);
router.put("/:id", livroController.atualizar);
router.delete("/:id", livroController.deletar);
router.get("/pegarLivro/:id", livroController.pegarLivro);
router.get("/devolverLivro/:id", livroController.devolverLivro);

module.exports = router;
