const express = require('express');
const app = express();
const port = 3004;


app.get('/add/:num1/:num2', (req, res) => {
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    let sum = num1 + num2;
    res.set('Content-Type', 'text/html');
    res.send(`The sum of ${num1} and ${num2} is <strong>${sum}</strong>`);
});
app.get('/sub/:num1/:num2', (req, res) => {
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    let sub = num1 - num2;
    res.set('Content-Type', 'text/html');
    res.send(`The subtraction of ${num1} and ${num2} is <strong>${sub}</strong>`);
});
app.get('/mul/:num1/:num2', (req, res) => {
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    let mul = num1 * num2;
    res.set('Content-Type', 'text/html');
    res.send(`The multiplication of ${num1} and ${num2} is <strong>${mul}</strong>`);
});
app.get('/div/:num1/:num2', (req, res) => {
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    let div = num1 / num2;
    res.set('Content-Type', 'text/html');
    res.send(`The division of ${num1} and ${num2} is <strong>${div}</strong>`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});