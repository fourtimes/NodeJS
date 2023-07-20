const express = require("express");
const router = express.Router();
const uploadController = require("../controller/controller_item_uploads");

router.post(
  "/multipleUpload",
  uploadController.uploadImages,
  uploadController.resizeImages,
  uploadController.post_item_upload_multipleUpload
);

module.exports = router;
