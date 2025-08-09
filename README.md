# API Rest para Testes e Automação

Esta API foi desenvolvida em Node.js com Express para fins de aprendizado de testes e automação de APIs. Utiliza banco de dados em memória e segue boas práticas de separação de responsabilidades.

## Funcionalidades
- Registro de usuário (sem duplicidade)
- Login (obrigatório informar login e senha)
- Consulta de usuários
- Transferência de valores entre usuários
  - Só permite transferências acima de R$ 5.000,00 para "favorecidos"

## Estrutura do Projeto
```
├── src
│   ├── app.js
│   ├── server.js
│   ├── controllers
│   ├── services
│   ├── models
│   ├── routes
│   └── docs
└── README.md
```

## Instalação
1. Clone o repositório
2. Instale as dependências:
   ```sh
   npm install
   ```

## Execução
- Para rodar em modo desenvolvimento:
  ```sh
  npm run dev
  ```
- Para rodar em modo produção:
  ```sh
  npm start
  ```

## Documentação Swagger
Acesse a documentação interativa em: `http://localhost:3000/api-docs`

## Testes
A API foi estruturada para facilitar testes automatizados (ex: Supertest).

## Observações
- Todos os dados são armazenados em memória (variáveis), portanto são perdidos ao reiniciar a aplicação.
- O endpoint `/api-docs` exibe a documentação Swagger.
