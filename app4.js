const express = require('express');
const app = express();
const port = 3005;

const {connection} = require("./db/db_config");

app.get("/",(req,res)=>{
  let userInput = req.query.term
  connection.query(`SELECT * FROM movie_data WHERE language LIKE '${userInput}%'`,(err,results)=>{
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