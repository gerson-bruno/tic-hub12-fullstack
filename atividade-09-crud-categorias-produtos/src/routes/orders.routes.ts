import { Router, Request, Response } from 'express';

const router = Router();

// POST /orders
router.post('/', (req: Request, res: Response) => {
  // Validação de Body 
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "Corpo da requisição vazio" });
  }

  const orderData = req.body;
  res.status(201).json(orderData);
});

// PATCH /orders/:id
router.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  res.json({ 
    message: `Pedido ${id} atualizado para o status: ${status}` 
  });
});

// DELETE /orders/:id
router.delete('/:id', (req: Request, res: Response) => {
  res.status(204).send();
});

export default router;