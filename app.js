const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  let user_input = req.query.name;
  let id = req.query.id;
  res.send(`Hello ${user_input} and your id is ${id}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})