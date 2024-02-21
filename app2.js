const express = require('express');
const app = express();
const port = 3002;


app.get('/add/:num1/:num2', (req, res) => {
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    let sum = num1 + num2;
    res.set('Content-Type', 'text/html');
    res.send(`The sum of ${num1} and ${num2} is <strong>${sum}</strong>`);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});