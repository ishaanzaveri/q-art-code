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

router.post('/', async (req, res) => {
    let newUrl = {
        url: req.body.url,
        question: req.body.question
    };
    try {
        await urlSchema.create(newUrl);
    } catch (e) {
        console.error(e.message);
    }
    res.json(await urlSchema.find());
})

router.post('/submit', async (req, res) => {
    await urlSchema.findOneAndUpdate(
        { url: req.body.url }, {
        $push: {
            responses: req.body.image_path
        }
    }).exec()

    res.status(200).send()
})

module.exports = router
