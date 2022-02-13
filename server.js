// Dependencies
const express = require('express');
const api = require('./routes/api');
const html = require('./routes/html');
const app = express();
const PORT = process.env.PORT || 3001;

// Parsing incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Parsing incoming JSON data
app.use(express.json());
app.use(express.static('assets'));
app.use('/api', api);
app.use('/', html);

// Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});