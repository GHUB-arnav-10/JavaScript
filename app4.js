const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3005;

const {connection} = require("./db/db_config");

app.get("/",(req,res)=>{
  let userInput = req.query.term
  connection.query(`SELECT * FROM movie_data WHERE title LIKE ?`,
  [`${userInput}%`],
  (err,results)=>{
    if(err){
      console.log(`Error in query!`)
      res.send("Error in DB query!");
    }
    else{
      console.log(results);
      res.send(results);
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 