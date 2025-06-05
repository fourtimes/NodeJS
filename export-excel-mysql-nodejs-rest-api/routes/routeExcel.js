const express = require('express');
const router = express.Router();
const { getAllTransactions, exportToExcel, getRoute } = require('../controller/controllerExcel');

router.get('/export', exportToExcel);
router.get('/get', getAllTransactions);
router.get('/', getRoute);


module.exports = router;