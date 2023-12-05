const express = require("express");
const router = express.Router();
const autorController = require("../controller/autor_controller");

router.delete("/:id", autorController.deletar);

module.exports = router;
