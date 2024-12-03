import sequelize from '../config/database.js';
import User from './user.js';
import Task from './task.js';

// Definir associações (se necessário)
User.hasMany(Task, { foreignKey: 'assignedTo' });
Task.belongsTo(User, { foreignKey: 'assignedTo' });

// Exportar os modelos e a instância do Sequelize
const db = {
  sequelize,
  User,
  Task,
};

export default db;
