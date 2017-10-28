'use strict'

const express = require('express');
const app = express();
const path = require('path');

// MIDDLEWARE TO DEFINE FOLDER FOR STATIC FILES
app.use(express.static('public'));

// SET PATH FOR STATIC FILES
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT | 3000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));