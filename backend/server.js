// Importando as bibliotecas necessárias
import express from 'express';
import mysql from 'mysql2';
import path from 'path';
import dotenv from 'dotenv';
import db from './models';

// Criando uma instância do app Express
const app = express();

// Sincronizar os modelos com o banco de dados
(async () => {
  try {
    await db.sequelize.sync({ force: false }); // Altere para true para recriar tabelas (apenas em dev)
    console.log('Banco de dados sincronizado.');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
})();

// Conectando ao banco de dados MySQL
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1);
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Middleware para lidar com requisições JSON
app.use(express.json());

// Definindo rotas para a API (exemplo de rota)
app.get('/api/progress', (req, res) => {
  db.query('SELECT * FROM progress', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar dados' });
    }
    res.json(results);
  });
});

// Servindo o frontend React (após build)
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Rota para quando a aplicação for acessada diretamente
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Definindo a porta para o servidor rodar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
