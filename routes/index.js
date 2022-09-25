const router = require("express").Router();
const upload = require("../middleware/multer");
const index = require("../controllers/index");

router.get("/", (req, res) => {
  res.render("index", {
    layout: "./layout/main",
    title: "Selamat Datang",
  });
});
router.post("/", upload.single("image"), index.addUser);
router.get("/delete/:id", index.deleteUser);
router.post("/edit/:id", upload.single("image"), index.editUser);

module.exports = router;
