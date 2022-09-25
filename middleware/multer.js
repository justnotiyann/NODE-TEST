// // Import Multer
// const multer = require("multer");

// // Setting akan disimpan dimana filenya dan set nama file menjadi uniq
// const storage = multer.diskStorage({
//   // Set Folder
//   destination: function (req, file, cb) {
//     cb(null, "/tmp/avatar");
//   },
//   // Set Filename
//   filename: function (req, file, cb) {
//     const mimeExtension = {
//       "image/jpg": "jpg",
//       "image/jpeg": "jpeg",
//       "image/png": "png",
//     };
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + mimeExtension[file.mimetype]);
//   },
// });

// // Finalisasi Menggunakan Multer
// const uploadAvatar = multer({
//   storage: storage,
//   // Filefilter
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/pdf") {
//       cb(null, true);
//     } else {
//       cb(new Error("Only images and pdf are allowed"));
//     }
//   },
//   //   Limit file size menjadi 1MB
//   limits: {
//     fileSize: 1024,
//   },
// });

// module.exports = uploadAvatar;

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "tmp");
  },
  filename: function (req, file, cb) {
    const mimeExtension = {
      "image/jpg": "jpg",
      "image/jpeg": "jpeg",
      "image/png": "png",
    };
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + mimeExtension[file.mimetype]);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only images and pdf are allowed"));
    }
  },
  limits: {
    fileSize: 1024 * 1024,
  },
});

module.exports = upload;
