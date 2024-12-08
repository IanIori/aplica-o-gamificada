import sequelize from '../config/database.js';
import User from './user.js';
import Task from './task.js';

// Definie associações
User.hasMany(Task, { foreignKey: 'assignedTo' });
Task.belongsTo(User, { foreignKey: 'assignedTo' });

const db = {
  sequelize,
  User,
  Task,
};

export default db;
