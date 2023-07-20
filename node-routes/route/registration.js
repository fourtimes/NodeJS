const express = require("express");
const router = express.Router();
var connection = require("../db-config");

router.get("/", function (req, res) {
  res.send("<h1>Welcome to the registration route!</h1>");
});

router.get("/users", (req, res, next) => {
  connection.query("SELECT * FROM reg_user", function (err, result) {
    if (err) throw err;
    else res.send(result);
  });
});

module.exports = router;
