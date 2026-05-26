import express from 'express';
import productRoutes from './routes/products.routes.js';
import categoryRoutes from './routes/category.routes.js';
import orderRoutes from './routes/orders.routes.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());

// Logger Global
app.use((req, res, next) => {
  const date = new Date().toLocaleString();
  console.log(`[${date}] ${req.method} ${req.url}`);
  next();
});

// Rotas da Aplicação
app.use('/products', productRoutes);
app.use('/category', categoryRoutes);
app.use('/orders', orderRoutes);

// Error Middleware Global 
app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 API com Arquitetura Completa Rodando em http://localhost:${PORT}`);
});