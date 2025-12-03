# API de Futebol

Uma API construída em **Node.js**, **Express**, **Prisma** e **MySQL**, permitindo gerenciar **Jogadores**, **Clubes** e **Transferências**, além de possuir documentação via **Swagger**.

---

## 🚀 Tecnologias Utilizadas

* **Node.js**
* **Express**
* **Prisma ORM**
* **MySQL**
* **Docker / Docker Compose**
* **Swagger (OpenAPI 3)**

---

## 📌 Funcionalidades

### 👤 Jogadores

* **POST** – Criar jogador
* **GET** – Listar todos os jogadores
* **GET /:id** – Buscar jogador por ID
* **PUT /:id** – Atualizar jogador
* **DELETE /:id** – Deletar jogador

### 🏟️ Clubes

* **POST** – Criar clube
* **GET** – Listar clubes
* **GET /:id** – Buscar clube por ID
* **PUT /:id** – Atualizar clube
* **DELETE /:id** – Deletar clube

### 🔁 Transferências

* **POST** – Criar transferência
* **GET** – Listar todas as transferências
* Atualiza automaticamente o clube do jogador após transferência

---

## 📂 Estrutura do Projeto (exemplo)

```
project/
├─ src/
│  ├─ controllers/
│  ├─ routes/
│  ├─ services/
│  ├─ repositories/
│  ├─ utils/
│  └─ server.js
├─ prisma/
│  └─ schema.prisma
├─ swagger/
│  └─ swagger.json
├─ docker-compose.yml
├─ package.json
└─ README.md
```

---

## 🐳 Rodando com Docker

1. Suba os containers:

```
docker-compose up -d --build
```

2. A API estará disponível em:

```
http://localhost:3000
```

3. O Swagger estará em:

```
http://localhost:3000/api-docs
```

---

## ▶️ Rodando localmente (sem Docker)

1. Instalar dependências:

```
yarn install
```

2. Gerar o cliente Prisma:

```
yarn prisma generate
```

3. Rodar o servidor:

```
yarn dev
```

---

## 🔧 Configuração do ambiente

Crie um arquivo `.env` baseado em:

```
DATABASE_URL="mysql://root:senha@localhost:3306/football_db"
```

---

## 📘 Swagger

O arquivo de documentação está em:

```
swagger/swagger.json
```

Você pode editar e fazer versionamento no GitHub.

---

## 📄 Licença

Este projeto é livre para estudos e aprimoramentos.

---

Se quiser, posso personalizar ainda mais esse README, adicionar badges, GIFs, instruções extras ou exemplos de requests.
