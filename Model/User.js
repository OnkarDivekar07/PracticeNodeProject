const sequelize = require("../util/database");
const Sequalize = require("sequelize");

const User = sequelize.define("User", {
  id: {
    type: Sequalize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  Name: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  PhoneNumber: {
    type: Sequalize.BIGINT,
    allowNull: false,
  },
  Password: {
    type: Sequalize.TEXT,
    allowNull: false,
  },
});

module.exports = User;
