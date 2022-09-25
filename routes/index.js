const router = require("express").Router();
const upload = require("../middleware/multer");
const index = require("../controllers/index");

router.get("/", index.getAllUsers);
router.get("/delete/:id", index.deleteUser);
router.post("/add", upload.single("image"), index.addUser);

module.exports = router;
