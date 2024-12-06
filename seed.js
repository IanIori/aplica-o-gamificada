import db from './backend/models/index.js';

(async () => {
  try {
    const users = [
      { username: 'john_doe', email: 'john@example.com', password: 'password123', role: 'child' },
      { username: 'jane_smith', email: 'jane@example.com', password: 'password456', role: 'parent' },
      { username: 'admin_user', email: 'admin@example.com', password: 'adminPassword', role: 'admin' }
    ];

    for (const user of users) {
      await db.User.create(user);
    }

    console.log('Usuários inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir usuários:', error);
  } finally {
    db.sequelize.close();
  }
})();
