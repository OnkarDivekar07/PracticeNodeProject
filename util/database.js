const Sequalize = require("sequelize");

const sequelize = new Sequalize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.HOST,
    logging: false,
  }
);

module.exports = sequelize;
