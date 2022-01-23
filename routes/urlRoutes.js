const express = require("express");
const router = express.Router();
const UUID = require('uuid-js');
const mongoose = require('mongoose');
const urlSchema = require('../model/urls');
const imageSchema = require('../model/images');
const { listeners } = require("../model/urls");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
var FormData = require('form-data');

//  URLs 
router.get('/', async (req, res) => {
    res.send(await urlSchema.find());
})

router.post('/', async (req, res) => {
    let newUrl = {
        url: UUID.create().toString(),
        question: req.body.question
    };
    try {
        await urlSchema.create(newUrl);
        res.json(await urlSchema.find());
    } catch (e) {
        console.error(e.message);
    }

})

router.post('/submit', async (req, res) => {

    // console.log(req.body)

    var formdata = new FormData();
    formdata.append("image", req.body.image_path);

    fetch("https://api.imgur.com/3/image", {
        method: "POST",
        redirect: "follow",
        headers: {
            Authorization: "Client-ID 1fc9ff01580b6e1"
        },
        body: formdata
    })
        .then(response => response.json())
        // .then(res => { console.log(res); res.send(200) })
        .then(async url => {
            console.log(url.data.link)
            await urlSchema.findOneAndUpdate(
                { url: req.body.url }, {
                $push: {
                    responses: url.data.link
                }
            }).exec()

            res.status(200).send()
        })
        .catch(err => res.status(500).send())
})

router.delete('/:id', async (req, res) => {
    let currentId = req.params.id;
    console.log(currentId);
    try {
        await urlSchema.deleteOne({ _id: currentId });
        res.json(await urlSchema.find());
    } catch (e) {
        console.error(e.message);
    }
})
module.exports = router
