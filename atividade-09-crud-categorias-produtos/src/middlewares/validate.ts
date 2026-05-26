import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

export const validate = (schema: z.ZodObject) => 
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          status: "Bad Request",
          errors: error.issues.map(issue => ({
            campo: issue.path.join('.'),
            mensagem: issue.message
          }))
        });
      }
      return res.status(500).json({ message: "Erro interno no servidor" });
    }
};