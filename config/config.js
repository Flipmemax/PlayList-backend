require("dotenv").config();

module.exports = {
  development: {
    url: process.env.ELEPHANT_SQL,
    dialect: "postgress",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
