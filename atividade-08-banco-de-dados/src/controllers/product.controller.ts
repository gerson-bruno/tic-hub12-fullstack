import { Request, Response } from 'express';

export const productController = {
  create: (req: Request, res: Response) => {
    res.status(201).json({ message: "Produto criado!", data: req.body });
  },
  list: (req: Request, res: Response) => {
    const { category } = req.query;
    res.json({ message: "Produtos listados", categoryId: category || "todos" });
  },
  delete: (req: Request, res: Response) => res.status(204).send(),
};