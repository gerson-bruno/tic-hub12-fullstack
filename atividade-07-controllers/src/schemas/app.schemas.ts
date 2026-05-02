import { z } from 'zod';

// --- CATEGORIAS ---
export const createCategorySchema = z.object({
  body: z.object({
    name: z.string().min(3, "O nome da categoria deve ter no mínimo 3 letras"),
  })
});

export const categoryParamsSchema = z.object({
  params: z.object({
    id: z.string().uuid("ID inválido. Deve ser um UUID."),
  })
});

export const categoryQueryPaginationSchema = z.object({
  query: z.object({
    page: z.coerce.number().min(1).optional(),
    size: z.coerce.number().min(1).max(100).optional(),
  })
});

// --- PRODUTOS ---
export const createProductSchema = z.object({
  body: z.object({
    name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
    price: z.number().positive("O preço deve ser positivo"),
    categoryId: z.string().uuid("categoryId deve ser um UUID válido"),
  })
});

export const productParamsSchema = z.object({
  params: z.object({
    id: z.string().uuid("O ID do produto deve ser um UUID válido"),
  })
});