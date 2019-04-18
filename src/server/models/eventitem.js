const mongoose = require('mongoose')
const validator = require('validator')
const EventItem = mongoose.model('Events', {
    id: {
       type: String
    },
    title: {
       type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String
    },
    start:{
        type: Date,
    },
    end:{
        type: Date,
    },
    timezone:{
        type: String,
    },
    lat:{ 
        type: Number,
    },
    long:{
        type: Number,
    }
});

module.exports = EventItem;