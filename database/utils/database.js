const { Sequelize } = require('sequelize');

const db = new Sequelize('REVIEWS', 'root', 'password', {
	host: 'localhost',
	dialect: 'mysql',
});

module.exports = db;
