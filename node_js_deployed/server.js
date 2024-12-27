const express = require('express');
const app = express();
const db = require('./db.js');
require('dotenv').config();

const passport = require('./auth.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const logRequest = async (req, res, next) => {
    console.log(`${new Date().toLocaleString()}, Request made to ${req.originalUrl}`);
    next();
};
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleWare = passport.authenticate('local', {session:false});

app.get('/', localAuthMiddleWare, function (req, res) {
    res.send('Hello World');
});

const personroutes = require('./routes/personroutes.js');
app.use('/person', localAuthMiddleWare, personroutes);

app.listen(PORT, () => {
    console.log(`Server is live with port ${PORT}`);
});

