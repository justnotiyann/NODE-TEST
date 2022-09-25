const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Users = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  { freezeTableName: true, timestamps: false }
);

const result = Users.sync({});
if (!result) console.log("Gagal membuat table database");
module.exports = Users;
