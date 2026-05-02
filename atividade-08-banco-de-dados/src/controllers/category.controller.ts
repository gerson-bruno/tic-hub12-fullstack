import { Request, Response } from 'express';

export const categoryController = {
  getAll: (req: Request, res: Response) => {
    const { page = 1, size = 10 } = req.query;
    res.json({ message: "Categorias listadas", page, size });
  },
  create: (req: Request, res: Response) => {
    res.status(201).json({ message: "Categoria criada!", data: req.body });
  },
  delete: (req: Request, res: Response) => res.status(204).send(),
};