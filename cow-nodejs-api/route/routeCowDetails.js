const express = require("express");
const router = express.Router();

const controllerCowDetails = require("../controller/controllerCowDetails");

router.get("/", controllerCowDetails.getCowDetailsRoot);
router.get("/get", controllerCowDetails.getCowDetails);
router.post("/post", controllerCowDetails.postCowDetails);

module.exports = router;
