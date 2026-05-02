import express from 'express';
import productRoutes from './routes/products.routes.js';
import categoryRoutes from './routes/category.routes.js';


const app = express();

// Middleware para o Express entender JSON
app.use(express.json());

// Logger Simples (Mantive o seu, pois é uma ótima prática!)
app.use((req, res, next) => {
  const date = new Date().toLocaleString();
  console.log(`[${date}] ${req.method} ${req.url}`);
  next();
});

// Acoplando as novas rotas conforme a atividade
app.use('/products', productRoutes);
app.use('/category', categoryRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 API Rodando com Zod & Controllers em http://localhost:${PORT}`);
});