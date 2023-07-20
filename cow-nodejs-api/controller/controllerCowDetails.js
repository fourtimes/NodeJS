let db = require("../config/sqlConnection");
let { readCredentials } = require("../config/mysqlCredentials");

const getCowDetailsRoot = async (req, res) => {
  await res.send({ success: true, route: "getCowDetailsRoot" });
};

const getCowDetails = (req, res) => {
  let query = "SELECT * FROM cowdetails";
  db(readCredentials, query, async (err, results) => {
    if (err) {
      await res.status(200).json({ status: "error", error: err });
    } else {
      await res.status(200).json({
        status: "success",
        data: results.results,
        column: results.fields,
      });
    }
  });
};

const postCowDetails = (req, res) => {
  const query = `INSERT INTO cowdetails (cow_name) VALUES ('${req.body.cow_name}')`;
  db(readCredentials, query, async (err, results) => {
    if (err) {
      await res.status(200).json({ status: "error", error: err });
    } else {
      await res.status(200).json({
        status: "success",
        data: results.results,
      });
    }
  });
};

module.exports = { getCowDetailsRoot, getCowDetails, postCowDetails };
