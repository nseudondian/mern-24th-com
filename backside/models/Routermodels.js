const mongoose = require('mongoose')


const newdata = new mongoose.Schema({
    school: {
        type: String,
        required: true
    },
        location: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('datacollector', newdata)