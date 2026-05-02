import express, { Request, Response, NextFunction } from 'express';
import productRoutes from './routes/products.routes';
import orderRoutes from './routes/orders.routes';

const app = express();


app.use(express.json());

// Logger Simples  
app.use((req: Request, res: Response, next: NextFunction) => {
  const date = new Date().toLocaleString();
  console.log(`[${date}] ${req.method} ${req.url}`);
  next(); 
});

// Acoplando as rotas
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});