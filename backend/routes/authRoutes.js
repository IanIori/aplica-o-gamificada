import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log('Recebido:', { email, password });

  // Verifica se as credenciais correspondem
  if (email === 'admin@example.com' && password === '123456') {
    console.log('Credenciais válidas');
    return res.json({ token: 'fake-jwt-token' });
  }

  console.log('Credenciais inválidas');
  res.status(401).json({ error: 'Credenciais inválidas' });
});

export default router;
