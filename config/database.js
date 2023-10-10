const { Sequelize } = require('sequelize');
const {database}=require('./general_config')

const sequelize = new Sequelize(database.DB_NAME,database.DB_USER,database.DB_PASSWORD, {
  host:database.DB_HOST,
  dialect: 'postgres',
});

module.exports = sequelize;