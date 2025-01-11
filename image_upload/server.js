const express = require('express');
const app = express();
const db = require('./db.js');

app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = 3000;

const logRequest = async (req, res, next) => {
    console.log(`${new Date().toLocaleString()}, Request made to ${req.originalUrl}`);
    next();
};
app.use(logRequest);

app.use('/student', require('./routes/student_routes.js'));

app.listen(PORT, () => {
  console.log("Server is live with " + PORT);
});

