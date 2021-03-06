const express = require('express');
const mongoose = require('mongoose');
const urlSchema = require('./model/urls');
const imageSchema = require('./model/images');
const db = require('config').get("db");
const UUID = require('uuid-js');
const req = require('express/lib/request');
require('dotenv').config()

const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

// Add the mongoose connect line 
// console.log(db);
mongoose.connect(db).then(() => {
    console.log("Connected to the database")
}).catch((e) => {
    console.error(e.message)
});

const app = express();

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// Routes 
const qurlRouter = require('./routes/urlRoutes');
const image_router = require('./routes/image_router')
app.use("/api/qurl", qurlRouter);
app.use('/api/images/', image_router)
app.use('/', express.static('client/build'))
app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'client', build))
})

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));
