const e = require("express");
const Users = require("../models/Users");

const getAllUsers = async (req, res) => {
  const result = await Users.findAll({});
  if (result <= 0) res.json({ msg: "Data belum tersedia" });
  if (!result) res.json({ msg: "Gagal mengambil data" });
  res.json({ msg: "Berikut data yang tersedia", result });
};

const addUser = async (req, res) => {
  const { name, email } = req.body;
  if (name <= 0 || email <= 0) {
    res.json({ msg: "Harap isi data dengan benar" });
  } else if (!req.file) {
    res.json({ msg: "Harap upload gambar anda" });
  } else {
    const image = req.file.path;
    const result = await Users.create({
      name,
      email,
      image,
    });
    if (!result) res.json({ msg: "Gagal membuat data" });
    res.json({ msg: "Berikut membuat data", result });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.json({ msg: "Data p" });
  } else {
    const result = await Users.destroy({ where: { id: id } });
    if (!result) {
      res.json({ msg: "Data tidak ditemukan" });
    } else {
      res.json({ msg: "Data berhasil dihapus" });
    }
  }
};

const editUser = async (req, res) => {
  const id = req.params.id;
  const image = req.file.path;
  // const result
};

module.exports = { getAllUsers, addUser, deleteUser };
