const renderAlert = (title, res) => {
  res.render("partials/alert", {
    layout: "./layout/main",
    title,
  });
};

// function renderAlert(title, res) {
//   res.render("partials/alert", {
//     layout: "./layout/main",
//     title: title,
//   });
// }

module.exports = renderAlert;
