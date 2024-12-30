const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGO_LOCAL_VoteURL;
// const mongoURL = process.env.MONGODB_VoteURL;

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected',() => {
    console.log('Connected to Mongodb Server');
})
db.on('error',(err) => {
    console.log(`Mongodb connection failed due to ${err}`);
})
db.on('disconnected',() => {
    console.log('Disconnected with Mongodb Server');
})

module.exports = db;
