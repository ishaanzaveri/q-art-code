const express = require("express"); 
const router = express.Router();
const UUID = require('uuid-js');
const mongoose = require('mongoose');
const urlSchema = require('../model/urls');
const imageSchema = require('../model/images');

//  URLs 
router.get('/', async (req, res) => {
    res.send(await urlSchema.find());
})

router.post('/', async(req, res) => {
    let newUrl = {
        url : UUID.create().toString(),
        question : req.body.question
    };
    try {
        await urlSchema.create(newUrl);
    } catch (e) {
        console.error(e.message);
    }
    res.json(await urlSchema.find());
})

router.delete('/:id', async (req, res) => {
    let currentId = req.params.id;
    console.log(currentId);
    try {
        await urlSchema.deleteOne({_id : currentId});
        res.send(currentId + " is deleted");
    } catch (e) {
        console.error(e.message);
    }
})
module.exports = router
