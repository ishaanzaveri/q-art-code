const express = require('express');
const mongoose = require('mongoose');
const urlSchema = require('./model/urls');
const imageSchema = require('./model/images');
const db = require('config').get("db");
const UUID = require('uuid-js');
const req = require('express/lib/request');

// Add the mongoose connect line 
// console.log(db);
mongoose.connect(db).then(() => {
    console.log("Connected to the database")
}).catch((e) => {
    console.error(e.message)
});

const app = express();

app.use(express.json())

// Routes 
const qurlRouter = require('./routes/urlRoutes');
app.use("/api/qurl", qurlRouter);

const port = 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));
