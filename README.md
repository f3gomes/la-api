# LA API

Esta é uma aplicação Node(Express), desenvolvida para fins didáticos e parte de um desafio técnico. A aplicação permite que o usuário visualize uma lista de produtos, crie novos registros e também consiga editar ou excluir desde que o usuário esteja autenticado. Inclui cadastro de usuário e validação com JWT.

## Rodando localmente

Requisitos:

- [Node.js >= 18](https://nodejs.org/en)

Variáveis de ambiente:

- PORT=3001
- NODE_ENV=development
- JWT_SECRET_KEY=yoursecret
- JWT_EXPIRES_IN=1d
- DB_NAME=
- DB_HOST=
- DB_USERNAME=
- DB_PASSWORD=
- DB_PORT=5432

Clone o projeto

```bash
  git clone https://github.com/la-api
```

Entre no diretório do projeto

```bash
  cd la-api
```

Instale as dependências

```bash
  npm i
```

Inicie a aplicação

```bash
  npm start
```

A API estará disponível com a seguinte URL base:

http://localhost:3001/

## Funcionalidades

| ROTA                       | HTTP   | Descrição                |
| -------------------------- | ------ | ------------------------ |
| api/v1/products            | GET    | Lista todas os produtos  |
| api/v1/products            | POST   | Cadastra um novo produto |
| api/v1/products/:id        | PATCH  | Atualiza produto por ID  |
| api/v1/products/:id        | DELETE | Exlcui produto por ID    |
| api/v1/products/delete/all | DELETE | Exclui todos os produtos |

### Exemplo de Resposta (GET)

```json
[
  {
    "id": 1,
    "name": "Moto G 10",
    "brand": "Motorola",
    "urlImage": "https://i.zst.com.br/thumbs/12/f/19/-797867416.jpg",
    "price": "2057.00",
    "stock": 10,
    "createdAt": "2024-07-08T20:10:09.150Z",
    "updatedAt": "2024-07-08T20:10:09.150Z",
    "deletedAt": null
  },
  {
    "id": 2,
    "name": "Moto G 20",
    "brand": "Motorola",
    "urlImage": "https://i.zst.com.br/thumbs/12/f/19/-797867416.jpg",
    "price": "2361.00",
    "stock": 10,
    "createdAt": "2024-07-08T20:10:09.150Z",
    "updatedAt": "2024-07-08T20:10:09.150Z",
    "deletedAt": null
  }
]
```

### Exemplo de Requisição (POST)

```json
{
  "message": "Successfully created product",
  "newProduct": {
    "id": 51,
    "name": "MotoG 333",
    "brand": "Motorola",
    "urlImage": "https://i.zst.com.br/thumbs/12/f/19/-797867416.jpg",
    "price": "1100.99",
    "stock": 20,
    "createdAt": "2024-07-08T10:32:14.228Z",
    "updatedAt": "2024-07-08T10:32:14.228Z",
    "deletedAt": null
  }
}
```

## Stack utilizada

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Sequelize](https://sequelize.org/)

## Demonstração

A URL base da API está disponível no link abaixo:

https://la-api.vercel.app/

## Melhorias

-Validar dados de entrada nas requisições
-Incluir testes unitários

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
