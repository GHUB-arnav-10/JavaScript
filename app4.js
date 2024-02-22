const express = require('express');
const app = express();
const port = 3005;

const {connection} = require("./db/db_config");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})