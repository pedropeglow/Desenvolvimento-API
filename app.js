const express = require("express");
const livroRouter = require("./router/livro_router");

const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Bem-Vindo a Biblioteca!</h1>");
});

app.use("/livros", livroRouter);

app.listen(port, () => {
  console.log(`Library API listening on port ${port}`);
});
