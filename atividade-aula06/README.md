# Atividade Prática: Roteamento REST com Express e TypeScript 🚀

Repositório para consolidação de conceitos de rotas, parâmetros (Params, Query, Body), Middlewares e `express.Router()`.

---

## 📁 Estrutura do Projeto
- `src/server.ts`: Inicialização e middlewares globais.
- `src/routes/products.routes.ts`: Rotas de `/products`.
- `src/routes/orders.routes.ts`: Rotas de `/orders`.

---

## 🛣️ Endpoints Implementados

### 1. Produtos (`/products`)
- **GET `/products`**
  - Lista todos os produtos.
  - Suporta filtro por Query String: `/products?category=eletronicos`.
- **GET `/products/:id`**
  - Busca por ID via Route Params.
  - Regra: Retorna `400 Bad Request` se o ID for negativo.

### 2. Pedidos (`/orders`)
- **POST `/orders`**
  - Cria um pedido recebendo JSON no Body (cliente e IDs dos produtos).
  - Retorna `201 Created` e o objeto criado.
  - Validação: Retorna `400 Bad Request` se o Body estiver vazio.
- **PATCH `/orders/:id`**
  - Atualiza o status do pedido via Params e Body (`status: "pago"`).
  - Retorna `200 OK`.
- **DELETE `/orders/:id`**
  - Remove o pedido por ID.
  - Retorna `204 No Content`.

---

## 🔥 Diferenciais (Middlewares & TypeScript)
- **Logger Middleware:** Log no terminal para toda requisição no formato `[DATA] MÉTODO /URL`.
- **Validação de Body:** Intercepta e barra requisições `POST` sem conteúdo.
- **Tipagem Nativa:** Uso estrito de `Request`, `Response` e `NextFunction`.