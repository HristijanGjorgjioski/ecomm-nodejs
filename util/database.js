const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'database', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
