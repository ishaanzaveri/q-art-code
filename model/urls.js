const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    url: {
        type: "String",
        required: true
    },
    question: {
        type: "String",
        required: true
    },
    responses: {
        type: []
    }
})

module.exports = mongoose.model('urls', urlSchema);