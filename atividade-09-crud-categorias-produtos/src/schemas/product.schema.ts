import { z } from 'zod';

export const createProductSchema = z.object({
  body: z.object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
    price: z.number().positive("O preço deve ser maior que zero"),
    categoryId: z.string().uuid("O categoryId deve ser um UUID válido")
  })
});

export const productParamsSchema = z.object({
  params: z.object({
    id: z.string().uuid("O ID na URL deve ser um UUID válido")
  })
});