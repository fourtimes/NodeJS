require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routeExcel');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/excel', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});