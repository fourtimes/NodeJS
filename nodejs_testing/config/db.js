const Sequelize = require("sequelize");

const sequelize = new Sequelize("demo", "root", "admin@123", {
  host: "localhost",
  logging: false,
  dialect: "mysql",
  host: "3306",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const auth = sequelize.authenticate();
auth
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;
