// Importando as bibliotecas necessárias
import express from 'express';
import routes from './backend/routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './backend/models/index.js';

// Criando uma instância do app Express
const app = express();

// Sincronizar os modelos com o banco de dados
(async () => {
  try {
    await db.sequelize.authenticate(); // Verifica a conexão
    console.log('Conexão com o banco de dados estabelecida.');

    await db.sequelize.sync({ force: false }); // Sincroniza os modelos
    console.log('Modelos sincronizados com o banco de dados.');
  } catch (error) {
    console.error('Erro ao conectar ou sincronizar o banco de dados:', error);
    process.exit(1); // Encerra a aplicação caso o banco de dados falhe
  }
})();

// Middleware para lidar com requisições JSON
app.use(express.json());

// Exemplo de rota usando Sequelize
app.get('/api/progress', async (req, res) => {
  try {
    const progress = await db.Progress.findAll(); // Ajuste ao modelo
    res.json(progress);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});

// Servindo o frontend React (após build)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Rota para quando a aplicação for acessada diretamente
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Usa as rotas centralizadas
app.use('/api', routes);

// Definindo a porta para o servidor rodar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
