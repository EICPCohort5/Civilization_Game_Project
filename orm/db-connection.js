const { Sequelize } = require('sequelize');
const config = require('./db-connection-config');

const connection = new Sequelize(
    `mysql://${config.userName}:${config.password}@localhost:3306/${config.database}`,
    {
        // logging: false
    }
);

module.exports = connection;