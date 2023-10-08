const { Sequelize } = require('sequelize');
const {database}=require('./general_config')

// const pool = new Pool({
//     user:database.DB_USER,
//     host:database.DB_HOST,
//     database:database.DB_NAME,
//     password:database.DB_PASSWORD,
//     port:database.DB_PORT
// });

// module.exports = pool;

const sequelize = new Sequelize(database.DB_NAME,database.DB_USER,database.DB_PASSWORD, {
  host:database.DB_HOST,
  dialect: 'postgres',
});

module.exports = sequelize;