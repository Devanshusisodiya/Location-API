const mongoose = require('mongoose')

const Location = mongoose.Schema({
    name: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true}
})

module.exports = mongoose.model("location", Location)