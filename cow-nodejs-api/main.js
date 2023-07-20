const express = require("express");
const app = express();
app.use(express.json());

const routeCowDetails = require("./route/routeCowDetails");
// const routeMilkPriceDetails = require("./route/routeMilkPriceDetails");
// const routeCowFoodDetails = require("./route/routeCowFoodDetails");

app.use("/cowdetails", routeCowDetails);
// app.use("/milkdetails", routeMilkPriceDetails);
// app.use("/fooddetails", routeCowFoodDetails);

app.get("/", (req, res) => {
  res.send("Welcome to the cow backend Application!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
