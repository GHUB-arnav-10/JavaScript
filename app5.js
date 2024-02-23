const express = require('express');
const app = express();
const port = 3006;

const {connection} = require("./db/db_config");

app.get('/getSorted', (req, res) => {
    connection.query('SELECT * FROM movie_data ORDER BY release_year', (error, results) => {
        if (error) {
            console.error('Error retrieving sorted movies: ' + error.stack);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

// Route to return the latest movie in the database
app.get('/getLatest', (req, res) => {
    connection.query('SELECT * FROM movie_data ORDER BY release_year DESC LIMIT 1', (error, results) => {
        if (error) {
            console.error('Error retrieving latest movie: ' + error.stack);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results[0]);
    });
});

// Route to return the oldest movie in the database
app.get('/getOldest', (req, res) => {
    connection.query('SELECT * FROM movie_data ORDER BY release_year LIMIT 1', (error, results) => {
        if (error) {
            console.error('Error retrieving oldest movie: ' + error.stack);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results[0]);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }) 