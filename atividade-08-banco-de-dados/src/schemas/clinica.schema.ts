import { z } from 'zod';

export const pacienteSchema = z.object({
  cpf: z.string().length(11),
  nome: z.string().min(3)
});

export const planoSchema = z.object({
  id: z.string().uuid(),
  nome: z.string(),
  cobertura: z.number()
});

export const consultaSchema = z.object({
  id: z.string().uuid(),
  data: z.coerce.date(),
  paciente_cpf: z.string().length(11),
  medico_crm: z.string(),
  plano_id: z.string().uuid()
});