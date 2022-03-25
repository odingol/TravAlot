const Sequelize = require('sequelize');
// const mysql = require('mysql2');
require('dotenv').config();

// mysql2 method
// const db = mysql.createConnection(
//     {
//         host: "localhost",
//         port: 3306,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE,
//     }
// )

// Sequelize Method
const sequelize = process.env.JAWSDB_URL ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
  });

module.exports = sequelize;