// RENDER form add user
const renderAddUser = (req = "", res, title, jika, color, msg, kode) => {
  res.render("users/add_user", {
    layout: "./layout/main",
    title,
    jika,
    color,
    msg,
    kode,
  });
};

// RENDER alert
const renderAlert = (req = "", res, title, color, msg, kode) => {
  res.render("partials/alert", {
    layout: "./layout/main",
    title,
    color,
    msg,
    kode,
  });
};

const renderIndex = (req = "", res, title) => {
  res.render("index", {
    layout: "./layout/main",
    title,
  });
};

// Render semua data user / tabel
const renderAllUsers = (req = "", res, title, result, jika, color, msg, kode) => {
  res.render("users/get_user", {
    layout: "./layout/main",
    title: title,
    result,
    jika,
    color,
    msg,
    kode,
  });
};

module.exports = { renderAlert, renderIndex, renderAllUsers, renderAddUser };
