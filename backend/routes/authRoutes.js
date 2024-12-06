import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Validação simples para fins de exemplo
  if (email === 'admin@example.com' && password === '123456') {
    return res.json({ token: 'fake-jwt-token' });
  }
  
  res.status(401).json({ error: 'Credenciais inválidas' });
});

export default router;
