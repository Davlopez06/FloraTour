const mongoose = require('mongoose')

const plantSchema = mongoose.Schema({
    commonName: {
        type: String,
        require: true
    },
    scientificName: {
        type: String,
        require: true
    },
    stateOfConservationue: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    region: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Plant', plantSchema)