const Users = require("../models/Users");
const { renderAlert, renderAllUsers, renderAddUser } = require("../components/components");

const getAllUsers = async (req, res) => {
  const result = await Users.findAll({});
  if (result <= 0) {
    renderAllUsers("", res, "Belum ada data user", result, 1, "warning", "Belum ada data", "");
  } else if (!result) {
    renderAllUsers("", res, "Gagal mendapatkan data user", result, 1, "", "Gagal mendapatkan data user", "");
  } else {
    renderAllUsers("", res, "Semua Data User", result, 0, "", "", "");
  }
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
    if (!result) renderAlert("", res, "Gagal menambahkan data", "danger", "Gagal menambahkan data");
    renderAddUser("", res, "Berhasil add data", 1, "success", "Berhasil menambahkan data", 1);
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
      res.redirect("/EJSMULTER/getusers");
    }
  }
};

const editUser = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  if (name <= 0 || email <= 0) {
    res.json({ msg: "Harap isi data dengan benar" });
  } else if (!req.file) {
    res.json({ msg: "Harap upload gambar anda" });
  } else {
    const image = req.file.path;
    const result = await Users.update(
      {
        name,
        email,
        image,
      },
      { where: { id: id } }
    );
    if (!result) res.json({ msg: "Gagal edit data" });
    res.json({ msg: "Berhasil edit data !" });
  }
};

module.exports = { getAllUsers, addUser, deleteUser, editUser };
