# Atividade Prática: Estruturação, Controladores e Validação com Zod 🎯

Repositório dedicado à separação de responsabilidades (Rotas, Controllers e Schemas) e validação estrita de dados com a biblioteca **Zod** para as entidades de Categorias e Produtos.

---

## 📁 Estrutura do Projeto (Camadas Lógicas)
- `src/schemas/`: Definição das regras de validação (Zod Schemas).
- `src/controllers/`: Isolamento da lógica de negócio e respostas HTTP.
- `src/routes/`: Direcionamento das requisições (placas de trânsito).
- `src/middlewares/validateData.ts`: Middleware dinâmico para validação.

---

## 🛣️ Endpoints e Regras de Validação

### 1. Categorias (`/category`)
- **GET `/category`**
  - Paginação segura via Query String (valida se `page` e `size` são números).
- **GET / PUT / DELETE `/category/:id`**
  - Valida se o ID recebido via Params é um UUID autêntico. Retorna `400 Bad Request` se falhar.
- **POST `/category`**
  - Criação estrita. Campo `name` exige o tamanho mínimo de caracteres mapeado no Zod.

### 2. Produtos (`/products`)
- **POST `/products`**
  - Validação do Body: `name` (mín. 3 letras), `price` (número positivo) e `categoryId` (UUID válido). Retorna `201 Created`.
- **GET `/products`**
  - Listagem com filtro opcional por Query String: `?category=uuid_da_categoria`.
- **DELETE `/products/:id`**
  - Valida o ID via Params (UUID) e retorna `204 No Content` após o sucesso.

---

## 🔥 Funcionalidades Implementadas (Desafios)
- **Middleware de Validação Genérico (`validateData.ts`):** Intercepta a requisição antes do Controller, valida os dados contra o Schema do Zod correspondente e barra payloads "sujos" com status `400`.
- **Controllers Limpos:** Toda a lógica de `if/else` para checagem de tipos foi substituída pelo poder do `.safeParse()` do Zod.
- **Semântica REST:** Uso rigoroso dos verbos HTTP e tratamento correto dos Status Codes (`200`, `201`, `204`, `400`).