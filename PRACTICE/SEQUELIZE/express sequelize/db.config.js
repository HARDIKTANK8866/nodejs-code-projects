const Sequelize = require('sequelize');
const dbName = 'my_pgdb';
const dbUser = 'postgres';
const dbPassword = '1234567890';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// model-table
db.customers = require('./mypgdb.model')(sequelize, Sequelize);

module.exports = db;
