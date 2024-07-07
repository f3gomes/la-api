require("dotenv").config();

const options = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  dialectOptions: {
    timezone: "Z",
    ssl: {
      require: true,
    },
  },
  logging: false,
};

module.exports = options;
