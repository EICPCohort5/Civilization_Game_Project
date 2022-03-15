const { Sequelize } = require("sequelize");
const config = require("./db-connection-config");

// protocol://user:password@server:port/databaseName
// const connection = new Sequelize('mysql://root:root1234@localhost:3306/demos');
const connection = new Sequelize(
  `mysql://${config.username}:${config.password}@localhost:3306/${config.database}`,
  {
    // logging: false,
  }
);

module.exports = connection;
