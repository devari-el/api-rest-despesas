# 📘 API REST de Despesas Domésticas

---

## 📜 Intro

Este repositório tem como objetivo estudos de [Node.js](https://nodejs.org/) e [SQLite](https://www.sqlite.org/index.html). O projeto consiste em criar uma API REST que utiliza os verbos **POST** e **GET** para inserir e exibir despesas domésticas. 🏠💻

---

## 🛠️ Instalação e Teste

### 1. **Baixe e instale o [Node.js (versão LTS)](https://nodejs.org/en/download/)** 🟢

### 2. **Baixe e instale o [Git](https://git-scm.com/downloads)** 📥

### 3. **Faça um fork do repositório no GitHub** 🍴

### 4. **Clone o fork do repositório** (Abra o Git Bash ou terminal): 🖥️

```bash
git clone https://github.com/<USERNAME>/api-rest-despesas
```

### 5. **Entre no diretório do projeto**: 📂

```bash
cd api-rest-despesas
```

### 6. **Instale as dependências**: 📦

```bash
npm install
```

### 7. **Inicie o servidor de desenvolvimento**: 🚀

```bash
npm run dev
```

### 8. **Teste as requisições no [Hoppscotch](https://hoppscotch.io/)** 🔗
   - Instale a extensão no navegador para facilitar os testes.

### 9. **Executando requisições no Hoppscotch**: 📡

#### a. **Requisições GET**:
   - Selecione a opção **GET**.
   - Insira a URL exibida no terminal e clique em **Send**.

#### b. **Requisições POST**:
   1. Selecione a opção **POST**.
   2. Vá para a aba **Headers**:
      - No campo **Key**, digite `Content-Type`.
      - No campo **Value**, digite `application/json`.
   3. Vá para a aba **Body**:
      - Selecione **application/json**.
      - Insira os dados no seguinte formato JSON:

   ```json
   {
       "valor": 125.99,
       "descricao": "Mac Donalds",
       "tipo_pagamento_id": 3,
       "categoria_id": 1
   }
   ```

   - Os atributos `tipo_pagamento_id` e `categoria_id` podem ser visualizados conforme as requisições **GET** disponíveis no terminal.

---

## 🚀 Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

---

## 🙌 Finalização

Obrigado por explorar este projeto! Se você tiver alguma dúvida ou sugestão, fique à vontade para contribuir ou abrir uma issue. 😊🚀
