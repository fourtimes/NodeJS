const express = require("express");
const order_route = require("./route/order");
const img_route = require("./route/image");
const reg_route = require("./route/registration");

const app = express();
app.use("/order", order_route);
app.use("/image", img_route);
app.use("/registration", reg_route);

// home page
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Nodejs Application!</h1>");
});

// port connection
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const router = express.Router();
