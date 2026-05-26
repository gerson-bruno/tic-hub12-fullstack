# 🚀 E-Commerce API - CRUD de Products e Categories

Este projeto consiste na implementação do CRUD completo de **Produtos (Products)** e **Categorias (Categories)** para uma API de e-commerce. A aplicação foi desenvolvida seguindo rigorosamente a arquitetura em camadas (**Repository, Service, Controller**), garantindo a separação de responsabilidades, regras de negócio centralizadas e validação robusta de dados.

---

## 🏗️ Arquitetura do Projeto

A paginação e o fluxo de dados seguem o padrão de inversão e injeção de dependências, distribuídos nas seguintes camadas:

* **Entities (Entidades):** Contêm o núcleo do negócio e regras de validação ricas (ex: restrições de nomes, preços positivos e métodos como `rename`).
* **Repositories (Repositórios):** Responsáveis exclusivamente pela persistência de dados e paginação via `LIMIT` e `OFFSET`, sem tomadas de decisão de negócio.
* **Services (Serviços):** Centralizam as regras e validações cruzadas (ex: verificar se uma categoria existe antes de criar ou atualizar um produto).
* **Controllers (Controladores):** Responsáveis apenas por receber as requisições HTTP, acionar as validações do Zod e traduzir as respostas através de DTOs.
* **DTOs (Data Transfer Objects):** Classes com métodos estáticos responsáveis por padronizar a estrutura de entrada e saída dos dados.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** & **TypeScript**
* **Express** (Framework Web)
* **Zod** (Validação de Schemas e tipos)
* **Crypto** (Geração de UUIDs para entidades)

---

## 📝 Passo a Passo da Implementação

A construção do projeto seguiu a ordem lógica de dependência das camadas:

1.  **Database & Middlewares (`src/database.ts`, `src/middlewares`):** Configuração da estrutura de persistência em memória e implementação global do `errorMiddleware`, `authMiddleware` (JWT) e `authorize` (Roles).
2.  **Entities (`src/entities`):** Modelagem das classes `Category` e `Product` com validações internas de domínio.
3.  **DTOs (`src/dtos`):** Criação das estruturas de resposta padronizadas para listagens paginadas e retornos individuais.
4.  **Repositories (`src/repositories`):** Implementação dos métodos de CRUD com inteligência de paginação por `page` e `size`.
5.  **Services (`src/services`):** Desenvolvimento da lógica de negócio e integridade referencial entre produtos e categorias.
6.  **Controllers (`src/controllers`):** Isolamento total da lógica HTTP e tratamento de exceções direcionadas ao middleware global.
7.  **Schemas & Rotas (`src/schemas`, `src/routes`):** Acoplamento dos validadores do Zod (para Body, Params e Query) e proteção das rotas de escrita (`POST`, `PUT`, `DELETE`) para usuários com a role `admin`.

---

## 🔒 Segurança e Regras de Rotas

* **Rotas Públicas (GET):** Acessíveis sem autenticação para listagem e consulta.
* **Rotas Protegidas (POST, PUT, DELETE):** Exigem Token JWT válido (`authMiddleware`) e nível de acesso `admin` (`authorize`).
* **Tratamento de Erros:** Tentativas de escrita sem token retornam `401 Unauthorized`. Credenciais incorretas ou falta de permissão retornam `403 Forbidden`.

---

## 🚀 Como Executar e Testar

### Instalação
```bash
npm install
```
### Iniciar o Servidor
```bash
npm run dev
```
O servidor iniciará em http://localhost:3000.

### Exemplos de Requisições 
### 1. Criar Categoria (POST - Protegido)
URL: http://localhost:3000/category
Method: POST
Headers:
  Authorization: Bearer seu-token
  x-role: admin
Body (JSON):
{
  "name": "Eletrônicos"
}

### 2. Listar Categorias com Paginação (GET - Público)
URL: http://localhost:3000/category?page=1&size=5
Method: GET

### 3. Criar Produto (POST - Protegido)
URL: http://localhost:3000/products
Method: POST

Headers:

  Authorization: Bearer seu-token

  x-role: admin

Body (JSON):

{

  "name": "Mouse Gamer",

  "price": 199.90,

  "stock": 50,

  "categoryId": "UUID_DA_CATEGORIA_CRIADA"

}