import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('school_app', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log, // Exibe queries no console
});

export default sequelize;
