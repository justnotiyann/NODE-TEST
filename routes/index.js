const router = require("express").Router();
const upload = require("../middleware/multer");
const index = require("../controllers/index");
const components = require("../components/components");

// RENDER Halaman Utama
router.get("/", (req, res) => {
  components.renderIndex("", res, "Halaman utama");
});

// METHOD
router.get("/getusers", index.getAllUsers);

router.get("/adduser", (req, res) => {
  components.renderAddUser("", res, "Semua data user", 0, "", "", 0);
});

// Handling Form ADD User
router.post("/", upload.single("image"), index.addUser);

// DELETE
router.get("/delete/:id", index.deleteUser);

// EDIT
router.post("/edit/:id", upload.single("image"), index.editUser);

module.exports = router;
