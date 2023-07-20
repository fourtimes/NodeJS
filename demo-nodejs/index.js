const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("hello there");
})

app.listen(8080, (req, res) => {
    console.log("listening on port 8080")
})