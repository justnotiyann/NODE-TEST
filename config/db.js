const { Sequelize } = require("sequelize");

const db = new Sequelize("UJIKOM", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const result = db.authenticate();
if (!result) console.log(new Error("Gagal membuat database"));
console.log("Berhasil membuat database");

module.exports = db;
