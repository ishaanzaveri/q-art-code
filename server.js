const express = require('express');
const mongoose = require('mongoose');
const urlSchema = require('./model/urls');
const imageSchema = require('./model/images');
const UUID = require('uuid-js');

mongoose.connect("mongodb+srv://q-art-code:EWNwpl7sf42ywZvl@cluster0.mfjdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => {
    console.log("Connected to the database")
}).catch((e) => {
    console.error(e.message)
});

const app = express();

app.use(express.json())

// app.get('/api/customers', (req,res) => {
//     const cust = [
//         {id: 1, firstName: "Ishaan", lastName: "Zaveri"},
//         {id: 2, firstName: "Pankaj", lastName: "Meghani"},
//         {id: 3, firstName: "Clayton", lastName: "Dunavant"},
//         {id: 4, firstName: "Rebecca", lastName: "Williams"}
//     ];
//     res.json(cust);
// }); // for initial testing

// const initialUrl = {
//     url: UUID.create().toString(),
//     question : "Draw a Bird",
// }
// console.log(initialUrl);

// const makeInitialUser = async() => {
//     try {
//         await urlSchema.create(initialUrl);
//     } catch (e) {
//         console.error(e.message);
//     }

// }

// makeInitialUser();

// const testing = async () => {
//     const res = await urlSchema.find();
//     console.log(res);
// }

// testing()

// Routes 

//  URLs 
app.get('/api/qurl', async (req, res) => {
    res.send(await urlSchema.find());
})

app.post('/api/qurl', async(req, res) => {
    // console.log(req.body);
    let newUrl = {
        url : req.body.url,
        question : req.body.question
    };
    console.log(newUrl);
    try {
        await urlSchema.create(newUrl);
    } catch (e) {
        console.error(e.message);
    }
    res.json(await urlSchema.find());
})


const port = 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));
