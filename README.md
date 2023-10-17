# Desenvolvimento de API - Biblioteca 📚

<h4 align="center"> 
	🏁  Biblioteca API 🚀 Finalizado...  🏁
	Link: https://desenvolvimento-api-6d5m.vercel.app/
</h4>

### Features

- [x] APIs RESTful
- [x] CRUD

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node]
- [APIs RESTful]
- [JavaScript]
- [Vercel - Deploy]

## Documentação da API

#### Retorna todos os livros

```http
  GET /livros
```

#### Retorna um item

```http
  GET /livros/${id}
```

| Parâmetro | Tipo     | Descrição                                   |
| :-------- | :------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Inserir um livro

```http
  POST /livros/
```

| Body |
| :--- |

| `{
    "nome": "Nome Livro Teste",
    "autor": 1,
    "editora": "Editora teste",
    "anoPublicacao": "20/11/2020"
}`

#### Deletar um livro

```http
  DELETE /livros/${id}
```

| Parâmetro | Tipo     | Descrição                                   |
| :-------- | :------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Atualizar um livro

```http
  PUT /livros/${id}
```

| Body |
| :--- |

| `{
    "nome": "Nome Livro Teste MUDADO",
    "autor": 1,
    "editora": "Editora teste",
    "anoPublicacao": "20/11/2020"
}`

### Autor

---

<sub><b>Pedro Peglow</b></sub>🚀

Feito por Pedro Peglow 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Pedro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/pedro-peglow/)](https://www.linkedin.com/in/pedro-peglow/)
[![Gmail Badge](https://img.shields.io/badge/-pedropeglowm@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:pedropeglowm@gmail.com)](mailto:pedropeglowm@gmail.com)
