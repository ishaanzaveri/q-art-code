const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    imageID : {
        type: String, 
        required : true 
    }, 
    URL : {
        type: String, 
        required: true
    }, 
    imageString : {
        type: String
    }, 
    cookieHash : {
        type: String
    } 
})

module.exports = mongoose.model('images', imageSchema);