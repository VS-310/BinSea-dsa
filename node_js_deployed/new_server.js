const express = require('express');
const app = express();
const db = require('./db.js');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const logRequest = (req, res, next) => {
    console.log(`${new Date().toLocaleString()}, Request made to ${req.originalUrl}`);
    next();
};
app.use(logRequest);

app.get('/', function (req, res) {
    res.send('Hello World');
});

const personroutes = require('./routes/personroutes.js');
app.use('/person', personroutes);

app.listen(PORT, () => {
    console.log(`Server is live with ${PORT}`);
});

