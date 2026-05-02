import { Router, Request, Response } from 'express';

const router = Router();

// GET /products?category=eletronicos
router.get('/', (req: Request, res: Response) => {
  const { category } = req.query;
  
  if (category) {
    return res.json({ message: `Listando produtos da categoria: ${category}` });
  }
  
  res.json({ message: "Listando todos os produtos" });
});

// GET /products/:id
router.get('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (id < 0) {
    return res.status(400).json({ error: "ID não pode ser negativo" });
  }

  res.json({ message: `Exibindo detalhes do produto ${id}` });
});

export default router;