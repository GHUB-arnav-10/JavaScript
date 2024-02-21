const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  console.log(req.query.name)
  res.send('Hello Arnav!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})