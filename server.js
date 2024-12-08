import express from 'express';
import routes from './backend/routes/index.js';
import authRoutes from './backend/routes/AuthRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './backend/models/index.js';

const app = express();

(async () => {
  try {
    console.log('Tentando autenticar com o banco de dados...');
    await db.sequelize.authenticate();
    console.log('Conexão autenticada com sucesso!');

    console.log('Sincronizando os modelos...');
    await db.sequelize.sync({ force: false });
    console.log('Modelos sincronizados com sucesso!');
  } catch (error) {
    console.error('Erro durante a sincronização:', error.message);
    process.exit(1);
  }
})();

console.log('Ativando middleware para JSON...');
app.use(express.json());

console.log('Registrando rotas...');
app.use('/api', (req, res, next) => {
  console.log('Rota /api acessada');
  next();
}, routes);
app.use('/api/auth', authRoutes);

console.log('Servindo frontend React...');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'frontend/public')));
app.get('*', (req, res) => {
  console.log('Servindo React para rota não capturada');
  res.sendFile(path.join(__dirname, 'frontend/public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error('Erro capturado no middleware:', err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});
