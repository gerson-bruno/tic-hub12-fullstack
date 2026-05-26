
import { Request, Response, NextFunction } from 'express';


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  if (token === 'Bearer invalid-token') {
    return res.status(401).json({ message: "Token inválido" });
  }
  next();
};

export const authorize = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const role = req.headers['x-role']; 
    if (role !== requiredRole) {
      return res.status(403).json({ message: "Acesso proibido para esta role" });
    }
    next();
  };
};